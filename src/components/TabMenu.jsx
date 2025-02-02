import React, { useState } from "react";  
import SurahList from "./SurahList"; // Import the SurahList component  
import DeepSurah from "./DeepSurah"; // Import the DeepSurah component  

const TabMenu = () => {  
  const [activeTab, setActiveTab] = useState("DeepSurah"); // Default active tab  

  const renderComponent = () => {  
    switch (activeTab) {  
      case "DeepSurah":  
        return <DeepSurah />;  
      case "Surah":  
        return <SurahList />; // Render SurahList when Surah tab is active  
      default:  
        return null;  // Optional: Can return a default message or component  
    }  
  };  

  return (  
    <>  
      <h1 className="text-4xl font-bold mt-10 text-center text-indigo-700 mb-8 animate-fadeIn">  
        Bayyinah TV Progress Tracker  
      </h1>  
      <div className="w-full max-w-md mx-auto">  
        {/* Tab Buttons */}  
        <div className="flex justify-around bg-white p-3 rounded-lg mb-4 shadow-md">
        <button  
            onClick={() => setActiveTab("Surah")}  
            className={`px-4 py-2 rounded-lg text-white ${activeTab === "Surah" ? "bg-purple-500" : "bg-indigo-600"}`}  
          >  
            Concise Commentary  
          </button>   
          <button  
            onClick={() => setActiveTab("DeepSurah")}  
            className={`px-4 py-2 rounded-lg text-white ${activeTab === "DeepSurah" ? "bg-purple-500" : "bg-indigo-600"}`}  
          >  
            Deeper Look  
          </button>  
          
        </div>  
      </div>  
      {/* Render Component */}  
      <div className="w-full bg-gray-100 p-4 rounded-lg shadow-md">  
        {renderComponent()}  
      </div>  
    </>  
  );  
};  

export default TabMenu;