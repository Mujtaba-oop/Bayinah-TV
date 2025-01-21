// src/components/Part.jsx
import React from "react";

const Part = ({ part, isWatched, onWatch, onUnwatch }) => {
  return (
    <li className="flex justify-between items-center p-2 border-b">
      <span>{part.title}</span>
      {isWatched ? (
        <button
          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
          onClick={onUnwatch}
        >
          Unwatch
        </button>
      ) : (
        <button
          className="bg-purple-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          onClick={onWatch}
        >
           Watched
        </button>
      )}
    </li>
  );
};

export default Part;
