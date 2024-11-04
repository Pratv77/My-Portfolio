import React from "react";

const Card = ({ children }) => {
  return (
    <div className="h-full w-full bg-gray-50/[.02] transition duration-300 rounded-lg border border-white/25">
      {children}
    </div>
  );
};

export default Card;