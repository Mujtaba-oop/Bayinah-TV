// src/components/Surah.jsx
import React, { useState } from "react";
import Part from "./Part";

const Surah = ({ title, duration, parts, watchedParts, onWatch, onUnwatch }) => {
  const [showParts, setShowParts] = useState(false);

  const toggleParts = () => setShowParts(!showParts);

  const completedCount = parts.filter((part) =>
    watchedParts.some((watched) => watched.surah === title && watched.part === part.title)
  ).length;

  const progressPercentage = (completedCount / parts.length) * 100;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:bg-blue-100 transform transition-all">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-indigo-600">{title}</h2>
          <p className="text-gray-500">{duration}</p>
          <p className="text-sm text-green-600 font-semibold mt-1">
            {completedCount}/{parts.length} Lectures Completed
          </p>
          <div className="relative w-full h-2 bg-gray-200 rounded-full mt-2">
            <div
              className="absolute top-0 left-0 h-full bg-green-500 rounded-full transition-all"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded shadow-md hover:bg-indigo-600 focus:outline-none"
          onClick={toggleParts}
        >
          {showParts ? "Hide Parts" : "View Parts"}
        </button>
      </div>
      {showParts && (
        <ul
          className={`mt-4 space-y-2 transition-all duration-500 ${
            showParts ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
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
