// src/components/SurahList.jsx
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import Surah from "./Surah";

const surahData = [
 
  {  
    title: "1-Surah Al-Fatihah",  
    parts: [  
      { title: "1-An Introduction" },  
      { title: "2-Al-Fatihah (Ayah 1a)" },  
      { title: "3-Al-Fatihah (Ayah 1b)" },  
      { title: "4-Al-Fatihah (Ayah 1c)" },  
      { title: "5-Al-Fatihah (Ayah 1d)" },  
      { title: "6-Al-Fatihah (Ayah 2)" },  
      { title: "7-Al-Fatihah (Ayah 3)" },  
      { title: "8-Al-Fatihah (Ayah 4)" },  
      { title: "9-Al-Fatihah (Ayah 5)" },  
      { title: "10-Al-Fatihah (Ayah 6)" },  
      { title: "11-Al-Fatihah (Ayah 7)" },  
      { title: "12-Al-Fatihah - Balance and Observations" },  
    ],  
  },  
  {  
    title: "2-Surah Al-Baqarah",  
    parts: [  
      { title: "1-Al-Baqarah (Ayah 1-3)" },  
      { title: "2-Al-Baqarah (Ayah 4-8)" },  
      { title: "3-Al-Baqarah (Ayah 9-12)" },  
      { title: "4-Al-Baqarah (Ayah 13-17)" },  
      { title: "5-Al-Baqarah (Ayah 18-24)" },  
      { title: "6-Al-Baqarah (Ayah 25-27)" },  
      { title: "7-Al-Baqarah (Ayah 27-33)" },  
      { title: "8-Al-Baqarah (Ayah 34-37)" },  
      { title: "9-Al-Baqarah (Ayah 38-44)" },  
      { title: "10-Al-Baqarah (Ayah 44-51)" },  
      { title: "11-Al-Baqarah (Ayah 52-60)" },  
      { title: "12-Al-Baqarah (Ayah 61-62)" },  
      { title: "13-Al-Baqarah (Ayah 63-74)" },  
      { title: "14-Al-Baqarah (Ayah 74-78)" },  
      { title: "15-Al-Baqarah (Ayah 79-90)" },  
      { title: "16-Al-Baqarah (Ayah 91-102)" },  
      { title: "17-Al-Baqarah (Ayah 102-105)" },  
      { title: "18-Al-Baqarah (Ayah 104-113)" },  
      { title: "19-Al-Baqarah (Ayah 114-128)" },  
      { title: "20-Al-Baqarah (Ayah 129-144)" },  
      { title: "21-Al-Baqarah (Ayah 145-167)" },  
      { title: "22-Al-Baqarah (Ayah 168-185)" },  
      { title: "23-Al-Baqarah (Ayah 186-195)" },  
      { title: "24-Al-Baqarah (Ayah 196-207)" },  
      { title: "25-Al-Baqarah (Ayah 208-220)" },  
      { title: "26-Al-Baqarah (Ayah 221-242)" },  
      { title: "27-Al-Baqarah (Ayah 243-252)" },  
      { title: "28-Al-Baqarah (Ayah 253-256)" },  
      { title: "29-Al-Baqarah (Ayah 257-263)" },  
      { title: "30-Al-Baqarah (Ayah 264-277)" },  
      { title: "31-Al-Baqarah (Ayah 278-286)" },  
    ],  
  }
  ,  {  
    title: "3-Surah Ali 'Imran",  
    parts: [  
      { title: "1-Ayah (1-6)" },  
      { title: "2-Ayah (7-13)" },  
      { title: "3-Ayah (14-16)" },  
      { title: "4-Ayah (17-18)" },  
      { title: "5-Ayah (19-21)" },  
      { title: "6-Ayah (22-25)" },  
      { title: "7-Ayah (26-27)" },  
      { title: "8-Ayah (28-30)" },  
      { title: "9-Ayah (31)" },  
      { title: "10-Ayah (32-37)" },  
      { title: "11-Ayah (37-44)" },  
      { title: "12-Ayah (45-50)" },  
      { title: "13-Ayah (51-58)" },  
      { title: "14-Ayah (59-68)" },  
      { title: "15-Ayah (69-76)" },  
      { title: "16-Ayah (77-84)" },  
      { title: "17-Ayah (85-91)" },  
      { title: "18-Ayah (92-93)" },  
      { title: "19-Ayah (94-100)" },  
      { title: "20-Ayah (101-102)" },  
      { title: "21-Ayah (103)" },  
      { title: "22-Ayah (103-104)" },  
      { title: "23-Ayah (105-110)" },  
      { title: "24-Ayah (111-113)" },  
      { title: "25-Ayah (114-118)" },  
      { title: "26-Ayah (119-122)" },  
      { title: "27-Ayah (123-132)" },  
      { title: "28-Ayah (133-138)" },  
      { title: "29-Ayah (139-143)" },  
      { title: "30-Ayah (144-152)" },  
      { title: "31-Ayah (153-158)" },  
      { title: "32-Ayah (159)" },  
      { title: "33-Ayah (160-166)" },  
      { title: "34-Ayah (167-170)" },  
      { title: "35-Ayah (171-177)" },  
      { title: "36-Ayah (178-184)" },  
      { title: "37-Ayah (185-187)" },  
      { title: "38-Ayah (188-189)" },  
      { title: "39-Ayah (190-191)" },  
      { title: "40-Ayah (192-195)" },  
      { title: "41-Ayah (196-200)" },  
      { title: "42-Closing Remarks Part 1" },  
      { title: "43-Closing Remarks Part 2" },  
    ],  
  },
  {  
    title: "4-Surah An-Nisa'",  
    parts: [  
      { title: "1-Ayah (1-4)" },  
      { title: "2-Ayah (5-9)" },  
      { title: "3-Ayah (10-15)" },  
      { title: "4-Ayah (16-22)" },  
      { title: "5-Ayah (23-25)" },  
      { title: "6-Ayah (26-31)" },  
      { title: "7-Ayah (32-34)" },  
      { title: "8-Ayah (35-39)" },  
      { title: "9-Ayah (40-49)" },  
      { title: "10-Ayah (50-59)" },  
      { title: "11-Ayah (60-66)" },  
      { title: "12-Ayah (67-70)" },  
      { title: "13-Ayah (71-75)" },  
      { title: "14-Ayah (76-77)" },  
      { title: "15-Ayah (78-84)" },  
      { title: "16-Ayah (85-90)" },  
      { title: "17-Ayah (91-94)" },  
      { title: "18-Ayah (95-103)" },  
      { title: "19-Ayah (104-113)" },  
      { title: "20-Ayah (114-121)" },  
      { title: "21-Ayah (122-128)" },  
      { title: "22-Ayah (129-135)" },  
      { title: "23-Ayah (136-143)" },  
      { title: "24-Ayah (144-145)" },  
      { title: "25-Ayah (146-151)" },  
      { title: "26-Ayah (152-158)" },  
      { title: "27-Ayah (159-163)" },  
      { title: "28-Ayah (164-171)" },  
      { title: "29-Ayah (172-176)" },  
    ],  
  },
  {  
    title: "5-Surah Al-Ma'idah",  
    parts: [  
      { title: "1-Ayah (1-3)" },  
      { title: "2-Ayah (4-5)" },  
      { title: "3-Ayah (5-8)" },  
      { title: "4-Ayah (9-15)" },  
      { title: "5-Ayah (16-26)" },  
      { title: "6-Ayah (27-32)" },  
      { title: "7-Ayah (33-35)" },  
      { title: "8-Ayah (36-40)" },  
      { title: "9-Ayah (41-42)" },  
      { title: "10-Ayah (43-46)" },  
      { title: "11-Ayah (47-49)" },  
      { title: "12-Ayah (50-54)" },  
      { title: "13-Ayah (54-63)" },  
      { title: "14-Ayah (64-68)" },  
      { title: "15-Ayah (69-76)" },  
      { title: "16-Ayah (77-89)" },  
      { title: "17-Ayah (90-97)" },  
      { title: "18-Ayah (98-106)" },  
      { title: "19-Ayah (107-120)" },  
    ],  
  } 
];


const SurahList = () => {
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
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8 animate-fadeIn">
        Bayyinah TV Progress Tracker
      </h1>
      <div className="space-y-8">
        {surahData.map((surah) => (
          <Surah
            key={surah.title}
            title={surah.title}
            duration={surah.duration}
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

export default SurahList;
