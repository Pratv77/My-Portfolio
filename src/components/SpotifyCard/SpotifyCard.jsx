import React from "react";
import spotifyLogo from "../../assets/spotify.png";
import background from "../../assets/football-no-lines.png";

const SpotifyCard = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="h-full grid rounded-lg"
    >
      <div className="grid place-content-center grid-cols-3 grid-rows-3 lg:grid-rows-2 p-2 ml-2 font-montserrat">
        <div className="col-span-1 grid place-content-start p-4">
          <img src={spotifyLogo} className="w-12" />
        </div>

        <div className="text-white text-xl ml-4 col-span-3 row-start-2">
          <p className="text-2xl font-semibold overflow-x-auto whitespace-nowrap w-[300px]">
            Streatham
          </p>
          <p className="text-gray-500 font-semibold text-lg overflow-x-auto whitespace-nowrap w-[300px]">
            Dave
          </p>
          <div className="flex items-center">
            <div className="flex items-center justify-center mr-2 space-x-1">
              <div className="bar h-5 w-1 bg-green-500 animate-bar rounded-full"></div>
              <div className="bar h-6 w-1 bg-green-500 animate-bar delay-75 rounded-full"></div>
              <div className="bar h-7 w-1 bg-green-500 animate-bar delay-225 rounded-full"></div>
              <div className="bar h-5 w-1 bg-green-500 animate-bar delay-300 rounded-full"></div>
            </div>
            <p className="text-green-500 text-lg lg:text-base xl:text-lg">
              Currently Listening
            </p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes bar {
          0%,
          100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(0.3);
          }
        }
        .animate-bar {
          animation: bar 1s infinite ease-in-out;
          transform-origin: center; /* Change transform-origin to center */
        }
        .delay-75 {
          animation-delay: 0.15s;
        }
        .delay-225 {
          animation-delay: 0.45s;
        }
        .delay-300 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default SpotifyCard;
