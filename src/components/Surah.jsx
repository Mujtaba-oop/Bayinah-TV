import React, { useState } from 'react';
import Part from './Part';

const Surah = ({ title, duration, parts }) => {
  const [showParts, setShowParts] = useState(false);
  const [completed, setCompleted] = useState(0);

  const toggleParts = () => setShowParts(!showParts);

  const updateProgress = () => setCompleted((prev) => prev + 1);

  return (
    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:bg-indigo-100 hover:shadow-2xl">
      <div className="px-6 py-4 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-2">{title}</h2>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">
            {completed}/{parts.length} Completed
          </span>
          <button
            className="bg-indigo-500 text-white px-4 py-2 rounded shadow-lg hover:bg-indigo-600 focus:ring focus:ring-indigo-300"
            onClick={toggleParts}
          >
            {showParts ? 'Hide Parts' : 'View Parts'}
          </button>
        </div>
      </div>
      {showParts && (
        <ul className="text-gray-700 px-6 transition-opacity">
          {parts.map((part, index) => (
            <Part key={index} part={part} updateProgress={updateProgress} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Surah;
