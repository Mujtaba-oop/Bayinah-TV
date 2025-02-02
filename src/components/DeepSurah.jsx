// src/components/SurahList.jsx  
import React, { useState, useEffect } from "react";  
import { db } from "../firebase";  
import { doc, setDoc, onSnapshot } from "firebase/firestore";  
import Surah from "./Surah";  

const surahData = [  
 
    {  
      title: "57-Surah Al-Hadid",  
      parts: [  
        { title: "Day 1: Session 1 - Duration: 01h 00m" },  
        { title: "Day 1: Session 2 - Duration: 01h 09m" },  
        { title: "Day 2: Session 1 - Duration: 48m 07s" },  
        { title: "Day 2: Session 2 - Duration: 28m 54s" },  
        { title: "Day 2: Session 3 - Duration: 01h 26m" },  
        { title: "Day 3: Session 1 - Duration: 01h 16m" },  
        { title: "Day 3: Session 2 - Duration: 01h 14m" },  
        { title: "Day 4: Session 1 - Duration: 01h 20m" },  
        { title: "Day 4: Session 2 - Duration: 01h 02m" },  
        { title: "Day 5: Session 1 - Duration: 01h 20m" },  
        { title: "Day 5: Session 2 - Duration: 01h 26m" },  
        { title: "Day 6: Session 1 - Duration: 01h 22m" },  
        { title: "Day 6: Session 2 - Duration: 01h 16m" },  
        { title: "Day 7: Session 1 - Duration: 01h 26m" },  
        { title: "Day 7: Session 2 - Duration: 01h 29m" },  
      ],  
    },  
  ]; 

const DeepSurah = () => {  
  const [watchedParts, setWatchedParts] = useState([]);  

  useEffect(() => {  
    const userRef = doc(db, "users", "user_id"); // Replace "user_id" with dynamic user ID  
    const unsubscribe = onSnapshot(userRef, (docSnap) => {  
      if (docSnap.exists()) {  
        setWatchedParts(docSnap.data().watchedParts || []);  
      }  
    });  

    return () => unsubscribe();  
  }, []);  

  const handleWatch = async (surahTitle, partTitle) => {  
    const updatedWatchedParts = [...watchedParts, { surah: surahTitle, part: partTitle }];  
    setWatchedParts(updatedWatchedParts);  

    const userRef = doc(db, "users", "user_id");  
    await setDoc(  
      userRef,  
      { watchedParts: updatedWatchedParts },  
      { merge: true }  
    );  
  };  

  const handleUnwatch = async (surahTitle, partTitle) => {  
    const updatedWatchedParts = watchedParts.filter(  
      (watched) => !(watched.surah === surahTitle && watched.part === partTitle)  
    );  
    setWatchedParts(updatedWatchedParts);  

    const userRef = doc(db, "users", "user_id");  
    await setDoc(  
      userRef,  
      { watchedParts: updatedWatchedParts },  
      { merge: true }  
    );  
  };  

  return (  
    <div className="bg-gray-50 min-h-screen p-6">  
      <div className="space-y-8">  
        {surahData.map((surah) => (  
          <Surah  
            key={surah.title}  
            title={surah.title}  
            parts={surah.parts}  
            watchedParts={watchedParts}  
            onWatch={handleWatch}  
            onUnwatch={handleUnwatch}  
          />  
        ))}  
      </div>  
    </div>  
  );  
};  

export default DeepSurah;