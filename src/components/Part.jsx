import React, { useState } from 'react';

const Part = ({ part, updateProgress }) => {
  const [watched, setWatched] = useState(false);

  const handleWatched = () => {
    if (!watched) {
      setWatched(true);
      updateProgress();  // Update the parent Surah progress
    }
  };

  return (
    <li className="flex justify-between items-center border-b py-2">
      <span>{part.title} - {part.duration}</span>
      <button
        onClick={handleWatched}
        disabled={watched}
        className={`px-3 py-1 rounded ${watched ? 'bg-gray-500' : 'bg-green-500 hover:bg-green-600'} text-white`}
      >
        {watched ? '✔ Watched' : '✔'}
      </button>
    </li>
  );
};

export default Part;
