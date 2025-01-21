// src/components/Surah.jsx
import React, { useState } from "react";
import Part from "./Part";

const Surah = ({ title, duration, parts, watchedParts, onWatch, onUnwatch }) => {
  const [showParts, setShowParts] = useState(false);

  const toggleParts = () => setShowParts(!showParts);

  // Calculate completed parts
  const completedCount = parts.filter((part) =>
    watchedParts.some((watched) => watched.surah === title && watched.part === part.title)
  ).length;

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold text-indigo-600">{title}</h2>
          <p className="text-sm text-gray-500">{duration}</p>
          <p className="text-sm text-green-600">
            {completedCount}/{parts.length} Completed
          </p>
        </div>
        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
          onClick={toggleParts}
        >
          {showParts ? "Hide Parts" : "View Parts"}
        </button>
      </div>
      {showParts && (
        <ul className="mt-4">
          {parts.map((part, index) => {
            const isWatched = watchedParts.some(
              (watched) => watched.surah === title && watched.part === part.title
            );
            return (
              <Part
                key={index}
                part={part}
                isWatched={isWatched}
                onWatch={() => onWatch(title, part.title)}
                onUnwatch={() => onUnwatch(title, part.title)}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Surah;
