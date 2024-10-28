import React from "react";

const Card = ({ children }) => {
  return (
    <div className="h-full w-full bg-gray-50/[.02] hover:bg-gray-50/[.04] transition duration-300 rounded-lg border border-white/25">
      {children}
    </div>
  );
};

export default Card;