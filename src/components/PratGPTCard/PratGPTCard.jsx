import React from "react";
import sendIcon from "../../assets/send.png";
import profilePicture from "../../assets/ProfileP.png";

const PratGPTCard = () => {
  return (
    <div className="h-full rounded-lg">
      {/* Ensures the card matches your dark theme */}
      <div className="flex flex-col rounded-lg max-w-full h-full overflow-hidden">
        {/* Inner Container for Chat UI */}
        <div className="flex flex-col h-[100%] bg-black/70 rounded-lg overflow-hidden">
          <div className="flex items-center p-4 bg-neutral-950 text-white">
            <div className="relative">
              <img
                src={profilePicture}
                alt="Profile"
                className="h-16 rounded-full mr-2"
              />
              {/* Online Status Circle */}
              <div className="absolute bottom-0 right-0 h-5 w-5 bg-green-500 rounded-full border-2 border-neutral-950"></div>
            </div>
            <div className="ml-3">
              <h2 className="text-2xl font-semibold">PratGPT</h2>
              <span className="text-md text-gray-400">Prat#GPT</span>
            </div>
          </div>
          <div className="flex-grow p-4 overflow-y-auto">
            {/* Chat messages */}
            {/* Message 1 */}
            <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                  <p className="text-md">Hey, what are you supposed to be?</p>
                </div>
                <span className="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
            </div>
            {/* Message 2 */}
            <div className="flex w-full mt-2 space-x-3 max-w-xs">
              <div>
                <div className="bg-neutral-800 p-3 rounded-r-lg rounded-bl-lg">
                  <p className="text-md text-white">
                    Hey! I'm PratGPT, Pratham's assistant. I'm here to answer
                    any questions you have about him, things on the site, or
                    just chat if you'd like!
                  </p>
                </div>
                <span className="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
            </div>
            {/* Message 3 */}
            <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                  <p className="text-md">
                    Oh okay, so when's Pratham's birthday?
                  </p>
                </div>
                <span className="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
            </div>
            {/* Message 4 */}
            <div className="flex w-full mt-2 space-x-3 max-w-xs">
              <div>
                <div className="bg-neutral-800 p-3 rounded-r-lg rounded-bl-lg">
                  <p className="text-md text-white">
                    Pratham's birthday is on July 2nd, 2002.
                  </p>
                </div>
                <span className="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
            </div>
            {/* Add additional messages as needed */}
          </div>
          {/* Input Section */}
          <div className="p-4">
            <div className="flex items-center rounded-full border border-gray-500">
              <input
                className="flex-grow h-10 bg-transparent text-white text-lg outline-none px-4 placeholder-gray-500"
                type="text"
                placeholder="Text Message"
              />
              <button className="p-2 flex items-center justify-center rounded-full bg-transparent transition ease-in-out">
                <img
                  src={sendIcon}
                  alt="Send"
                  className="h-10 mr-4 hover:opacity-70 transition ease-in-out"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PratGPTCard;
