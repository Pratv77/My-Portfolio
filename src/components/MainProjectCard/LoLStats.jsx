import React from "react";

const LoLStats = ({ onBack }) => (
  <div className="flex flex-col items-center justify-center h-full text-center space-y-6 px-4">
    <h2 className="text-2xl font-bold text-white">LoL Stats Tracker</h2>
    <p className="text-gray-300 max-w-2xl">
      LoL Stats Tracker helps players monitor their ranked performance, win rates, and playstyle efficiency — and suggests data-driven improvements.
    </p>
    <button onClick={onBack} className="bg-white hover:bg-gray-100 text-gray-900 font-medium py-2 px-5 rounded-lg transition">
      ← Back to Projects
    </button>
  </div>
);

export default LoLStats;