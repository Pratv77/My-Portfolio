import React, { useState, useEffect, useRef } from "react";
import OpenAI from "openai";
import sendIcon from "../../assets/send.png";
import profilePicture from "../../assets/ProfileP.png";

const TypingIndicator = () => (
  <div className="flex w-full mt-2 space-x-3 max-w-xs animate-fade-in">
    <div>
      <div className="bg-neutral-800 p-4 rounded-r-lg rounded-bl-lg">
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
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
      content: "What's your purpose here?",
    },
    {
      isUser: false,
      content:
        "Hey! I'm here to help you explore Pratham's portfolio! I can answer questions about his skills, projects, and even guide you through his work. Ask me anything!",
    },
  ];

  const [messages, setMessages] = useState([...staticMessages]);
  const [input, setInput] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);
  const [assistant, setAssistant] = useState(null);
  const [thread, setThread] = useState(null);
  const [openaiClient, setOpenaiClient] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: "smooth",
        block: "end"
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isWaiting]);

  useEffect(() => {
    // Initialize OpenAI client once
    const client = new OpenAI({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });
    setOpenaiClient(client);

    const initAssistant = async () => {
      try {
        const threadInstance = await client.beta.threads.create();
        setThread(threadInstance);
        setAssistant({ id: "asst_cNrfkmuV6rP4Zg6qZko95zDj" });
      } catch (error) {
        console.error("Error initializing Thread:", error);
      }
    };

    initAssistant();
  }, []);

  const handleSendMessage = async () => {
    if (!input.trim() || !assistant || !thread || !openaiClient) return;

    const userMessage = { isUser: true, content: input.trim() };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setIsWaiting(true);

    try {
      await openaiClient.beta.threads.messages.create(thread.id, {
        role: "user",
        content: input.trim(),
      });

      const run = await openaiClient.beta.threads.runs.create(thread.id, {
        assistant_id: assistant.id,
      });

      let runStatus = await openaiClient.beta.threads.runs.retrieve(thread.id, run.id);
      
      while (runStatus.status === "in_progress" || runStatus.status === "queued") {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        runStatus = await openaiClient.beta.threads.runs.retrieve(thread.id, run.id);
      }

      if (runStatus.status === "completed") {
        const messages = await openaiClient.beta.threads.messages.list(thread.id);
        
        const lastMessage = messages.data
          .filter(msg => msg.role === "assistant")
          .shift();

        if (lastMessage && lastMessage.content && lastMessage.content[0]) {
          const assistantMessage = {
            isUser: false,
            content: lastMessage.content[0].text.value,
          };
          setMessages((prevMessages) => [...prevMessages, assistantMessage]);
        }
      } else {
        throw new Error(`Run ended with status: ${runStatus.status}`);
      }
    } catch (error) {
      console.error("Error in conversation:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          isUser: false,
          content: "I apologize, but I encountered an error. Please try again.",
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
              <div className="ml-3">
                <h2 className="text-2xl font-semibold">PratGPT</h2>
                <span className="text-md text-gray-400">Prat#GPT</span>
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
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
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