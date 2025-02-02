// src/components/Part.jsx
import React from "react";

const Part = ({ part, isWatched, onWatch, onUnwatch }) => {
  return (
    <li className="flex justify-between items-center p-2 border-b">
      <span>{part.title}</span>
      {isWatched ? (
        <button
          className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-600"
          onClick={onUnwatch}
        >
          Completed
        </button>
      ) : (
        <button
          className="bg-purple-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          onClick={onWatch}
        >
           Not Watched
        </button>
      )}
    </li>
  );
};

export default Part;
