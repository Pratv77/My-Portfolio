import React, { useState, useEffect, useRef, useCallback } from "react";
import OpenAI from "openai";
import sendIcon from "../../assets/send.png";
import profilePicture from "../../assets/ProfileP.png";
import { Info } from "lucide-react";

// Rate limiting
const RATE_LIMIT = {
  MAX_MESSAGES: 25,
  TIME_WINDOW: 3600000,
  MIN_DELAY: 1000,
};

const ERROR_MESSAGES = {
  RATE_LIMIT:
    "You've sent too many messages. Please wait a while before trying again.",
  SPAM: "Please wait a moment before sending another message.",
  API_ERROR:
    "I'm having trouble connecting right now. Please try again in a moment.",
  INITIALIZATION: "I'm still initializing. Please try again in a few seconds.",
  INVALID_INPUT: "I couldn't process that message. Please try something else.",
};

const TypingIndicator = () => (
  <div className="flex w-full mt-2 space-x-3 max-w-xs animate-fade-in">
    <div>
      <div className="bg-neutral-800 p-4 rounded-r-lg rounded-bl-lg">
        <div className="flex space-x-2">
          <div
            className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>
      </div>
      <span className="text-xs text-gray-500 leading-none">PratGPT</span>
    </div>
  </div>
);

const MessageBubble = ({ message, isLatest }) => {
  const baseClasses = `flex w-full mt-2 space-x-3 max-w-xs ${
    message.isUser ? "ml-auto justify-end" : ""
  }`;

  const animationClasses = isLatest ? "animate-message-appear" : "";

  return (
    <div className={`${baseClasses} ${animationClasses}`}>
      <div>
        <div
          className={`${
            message.isUser
              ? "bg-blue-600 text-white rounded-l-lg rounded-br-lg"
              : "bg-neutral-800 text-white rounded-r-lg rounded-bl-lg"
          } p-3 transform transition-all duration-300`}
        >
          <p className="text-md">{message.content}</p>
        </div>
        <span className="text-xs text-gray-500 leading-none">
          {message.isUser ? "You" : "PratGPT"}
        </span>
      </div>
    </div>
  );
};

const PratGPTCard = () => {
  const staticMessages = [
    {
      isUser: true,
      content: "What can I ask you about?",
    },
    {
      isUser: false,
      content:
        "You can ask me about all sorts of things! For example, 'What does Pratham like to do in his free time?', 'What projects has he completed so far?', or 'What's that Work-In-Progress card about?' Feel free to explore!",
    },
  ];

  const [messages, setMessages] = useState([...staticMessages]);
  const [input, setInput] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);
  const [assistant, setAssistant] = useState(null);
  const [thread, setThread] = useState(null);
  const [openaiClient, setOpenaiClient] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const messagesEndRef = useRef(null);
  const lastMessageTime = useRef(Date.now());
  const messageCount = useRef(0);
  const messageHistory = useRef([]);

  // Rate limiting check
  const checkRateLimit = useCallback(() => {
    const now = Date.now();
    const timeWindow = now - RATE_LIMIT.TIME_WINDOW;

    messageHistory.current = messageHistory.current.filter(
      (time) => time > timeWindow
    );

    if (messageHistory.current.length >= RATE_LIMIT.MAX_MESSAGES) {
      throw new Error(ERROR_MESSAGES.RATE_LIMIT);
    }

    if (now - lastMessageTime.current < RATE_LIMIT.MIN_DELAY) {
      throw new Error(ERROR_MESSAGES.SPAM);
    }

    messageHistory.current.push(now);
    lastMessageTime.current = now;
  }, []);

  // Spam detection
  const detectSpam = useCallback(
    (input) => {
      // Check for repeated messages
      const lastUserMessage = messages.findLast((msg) => msg.isUser)?.content;
      if (lastUserMessage === input) {
        throw new Error(ERROR_MESSAGES.SPAM);
      }

      // Check for very long messages
      if (input.length > 1000) {
        throw new Error(ERROR_MESSAGES.INVALID_INPUT);
      }

      // Check for excessive special characters
      const specialCharRatio =
        (input.match(/[^a-zA-Z0-9\s]/g) || []).length / input.length;
      if (specialCharRatio > 0.4) {
        throw new Error(ERROR_MESSAGES.INVALID_INPUT);
      }
    },
    [messages]
  );

  const scrollToBottom = useCallback(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isWaiting, scrollToBottom]);

  // Initialize OpenAI client and assistant
  useEffect(() => {
    const initializeChat = async () => {
      try {
        const client = new OpenAI({
          apiKey: import.meta.env.VITE_OPENAI_API_KEY,
          dangerouslyAllowBrowser: true,
        });
        setOpenaiClient(client);

        const threadInstance = await client.beta.threads.create();
        setThread(threadInstance);
        setAssistant({ id: import.meta.env.VITE_OPENAI_ASSISTANT_ID });
        setIsInitialized(true);
      } catch (error) {
        console.error("Error initializing chat:", error);
        setTimeout(initializeChat, 5000);
      }
    };

    initializeChat();
  }, []);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    try {
      if (!isInitialized || !assistant || !thread || !openaiClient) {
        throw new Error(ERROR_MESSAGES.INITIALIZATION);
      }

      checkRateLimit();
      detectSpam(input.trim());

      const userMessage = { isUser: true, content: input.trim() };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsWaiting(true);

      await openaiClient.beta.threads.messages.create(thread.id, {
        role: "user",
        content: input.trim(),
      });

      const run = await openaiClient.beta.threads.runs.create(thread.id, {
        assistant_id: assistant.id,
      });

      let runStatus = await openaiClient.beta.threads.runs.retrieve(
        thread.id,
        run.id
      );

      let timeout = setTimeout(() => {
        if (
          runStatus.status === "in_progress" ||
          runStatus.status === "queued"
        ) {
          throw new Error(ERROR_MESSAGES.API_ERROR);
        }
      }, 30000);

      while (
        runStatus.status === "in_progress" ||
        runStatus.status === "queued"
      ) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        runStatus = await openaiClient.beta.threads.runs.retrieve(
          thread.id,
          run.id
        );
      }

      clearTimeout(timeout);

      if (runStatus.status === "completed") {
        const messages = await openaiClient.beta.threads.messages.list(
          thread.id
        );
        const lastMessage = messages.data
          .filter((msg) => msg.role === "assistant")
          .shift();

        if (lastMessage?.content?.[0]) {
          const assistantMessage = {
            isUser: false,
            content: lastMessage.content[0].text.value,
          };
          setMessages((prev) => [...prev, assistantMessage]);
        }
      } else {
        throw new Error(ERROR_MESSAGES.API_ERROR);
      }
    } catch (error) {
      console.error("Error in conversation:", error);
      setMessages((prev) => [
        ...prev,
        {
          isUser: false,
          content: error.message || ERROR_MESSAGES.API_ERROR,
        },
      ]);
    } finally {
      setIsWaiting(false);
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes messageAppear {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-message-appear {
            animation: messageAppear 0.3s ease-out forwards;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          .animate-fade-in {
            animation: fadeIn 0.3s ease-out forwards;
          }
        `}
      </style>
      <div className="h-full rounded-lg relative border border-white/25">
        <div className="flex flex-col rounded-lg max-w-full h-full overflow-hidden">
          <div className="flex flex-col h-[100%] bg-black/70 rounded-lg overflow-hidden">
            <div className="flex items-center p-4 bg-black/60 rounded-t-lg text-white absolute top-0 left-0 right-0 backdrop-blur-md z-10">
              <div className="relative">
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="h-16 rounded-full mr-2"
                />
                <div className="absolute bottom-0 right-0 h-5 w-5 bg-green-500 rounded-full border-2 border-neutral-950"></div>
              </div>
              <div className="ml-3 flex items-center">
                <div>
                  <h2 className="text-2xl font-semibold">PratGPT</h2>
                  <span className="text-md text-gray-400">Prat#GPT</span>
                </div>
                <div className="relative group ml-2">
                  <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-gray-400 text-xs font-semibold cursor-help hover:text-gray-300 hover:border-gray-300 transition-colors">
                    i
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-neutral-800 text-sm text-gray-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none w-64 shadow-lg">
                    <p>
                      PratGPT might occasionally get things wrong. Feel free to
                      use the 'Leave a Message!' card to clarify with me directly.
                    </p>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transform rotate-45 w-2 h-2 bg-neutral-800"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-grow p-4 overflow-y-auto pt-20 message-container">
              {messages.map((message, index) => (
                <MessageBubble
                  key={index}
                  message={message}
                  isLatest={index === messages.length - 1}
                />
              ))}
              {isWaiting && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4">
              <div className="flex items-center rounded-full border border-gray-500">
                <input
                  className="flex-grow h-10 bg-transparent text-white text-lg outline-none px-4 placeholder-gray-500"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && !isWaiting && handleSendMessage()
                  }
                  placeholder="Type your message"
                  disabled={isWaiting}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isWaiting}
                  className="p-2 flex items-center justify-center rounded-full bg-transparent transition ease-in-out"
                >
                  <img
                    src={sendIcon}
                    alt="Send"
                    className={`h-10 mr-4 ${
                      isWaiting ? "opacity-50" : "hover:opacity-70"
                    } transition ease-in-out`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PratGPTCard;
