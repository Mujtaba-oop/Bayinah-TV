import React from 'react';
import SurahList from './components/SurahList';

const App = () => {
  return (
    <div className="bg-gradient-to-b from-purple-50 via-indigo-50 to-teal-50 font-sans min-h-screen py-10">
      <h1 className="text-5xl font-bold text-center text-indigo-700 mb-10 animate-pulse">Bayyinah History Tracker</h1>
      <div className="container mx-auto">
        <SurahList />
      </div>
    </div>
  );
};

export default App;
