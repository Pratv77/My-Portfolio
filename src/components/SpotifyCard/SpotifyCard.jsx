import React, { useEffect, useState } from "react";
import spotifyLogo from "../../assets/spotify.png";
import background from "../../assets/football-no-lines.png";

const SpotifyCard = () => {
  const [track, setTrack] = useState(null);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/me/player/currently-playing",
          {
            headers: {
              Authorization: `Bearer BQAE0QRkKYiQWYCrib2w6sqzGFDUXL9uZJgjMequqSWXsKTv9ZXUW-XYx-IsH6hORQlk5S6ysKxoYkkhMtl-DOn1R3xO6JYOUDzMVyXgYgjHQlB97iF7UwJeZsLp69lspI2Lp9ivoMKGrhOFegz2g_F2SDJBaOfY9zw9eaUpYj7v9epM9vrg2QcsnODygyE`, // Replace with your actual token
            },
          }
        );

        if (response.status === 204) {
          setTrack(null); // No track playing
          return;
        }

        if (response.ok) {
          const data = await response.json();
          setTrack(data.item); // Update track if playing
        } else {
          console.error("Failed to fetch currently playing song");
        }
      } catch (error) {
        console.error("Error fetching track:", error);
      }
    };

    // Poll every 10 seconds
    const intervalId = setInterval(fetchTrack, 10000);
    fetchTrack(); // Fetch initially

    return () => clearInterval(intervalId); // Cleanup interval
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="h-full grid rounded-lg border border-white/25 bg-transparent transition-colors duration-300 hover:bg-white/10"
    >
      <div className="grid place-content-center grid-cols-3 grid-rows-3 lg:grid-rows-2 p-2 ml-2 font-montserrat">
        <div className="col-span-1 grid place-content-start p-4">
          <img src={spotifyLogo} className="w-12" alt="Spotify Logo" />
        </div>

        <div className="text-white text-xl ml-4 col-span-3 row-start-2">
          {track && (
            <>
              <p className="text-2xl font-semibold overflow-x-auto whitespace-nowrap w-[300px]">
                {track.name}
              </p>
              <p className="text-gray-500 font-semibold text-lg overflow-x-auto whitespace-nowrap w-[300px]">
                {track.artists[0].name}
              </p>
            </>
          )}
          <div className="flex items-center">
            <div className="flex items-center justify-center mr-2 space-x-1">
              <div className="bar h-5 w-1 bg-green-500 animate-bar rounded-full"></div>
              <div className="bar h-6 w-1 bg-green-500 animate-bar delay-75 rounded-full"></div>
              <div className="bar h-7 w-1 bg-green-500 animate-bar delay-225 rounded-full"></div>
              <div className="bar h-5 w-1 bg-green-500 animate-bar delay-300 rounded-full"></div>
            </div>
            <p className="text-green-500 text-lg lg:text-base xl:text-lg">
              {track ? "Currently Listening" : "Currently Offline"}
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
          transform-origin: center;
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
