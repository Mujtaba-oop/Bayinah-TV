// src/components/SurahList.jsx
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import Surah from "./Surah";

const surahData = [
 
  {
    title: "1-Surah Al-Fatihah",
    duration: "3h",
    parts: [
      { title: "An Introduction", duration: "20m 28s" },
      { title: "Al-Fatihah (Ayah 1a)", duration: "20m 28s" },
      { title: "Al-Fatihah (Ayah 1b)", duration: "20m 41s" },
      { title: "Al-Fatihah (Ayah 1c)", duration: "21m 58s" },
      { title: "Al-Fatihah (Ayah 1d)", duration: "23m 05s" },
      { title: "Al-Fatihah (Ayah 2)", duration: "28m 12s" },
      { title: "Al-Fatihah (Ayah 3)", duration: "09m 04s" },
      { title: "Al-Fatihah (Ayah 4)", duration: "24m 09s" },
      { title: "Al-Fatihah (Ayah 5)", duration: "20m 55s" },
      { title: "Al-Fatihah (Ayah 6)", duration: "17m 29s" },
      { title: "Al-Fatihah (Ayah 7)", duration: "25m 28s" },
      { title: "Al-Fatihah - Balance and Observations", duration: "[Duration Unknown]" },
    ],
  },
  {
    title: "2-Surah Al-Baqarah",
    duration: "18h 37 ",
    parts: [
      { title: "Al-Baqarah (Ayah 1-3)", duration: "19m 27s" },
      { title: "Al-Baqarah (Ayah 4-8)", duration: "18m 21s" },
      { title: "Al-Baqarah (Ayah 9-12)", duration: "19m 48s" },
      { title: "Al-Baqarah (Ayah 13-17)", duration: "22m 47s" },
      { title: "Al-Baqarah (Ayah 18-24)", duration: "18m 39s" },
      { title: "Al-Baqarah (Ayah 25-27)", duration: "20m 22s" },
      { title: "Al-Baqarah (Ayah 27-33)", duration: "21m 31s" },
      { title: "Al-Baqarah (Ayah 34-37)", duration: "18m 20s" },
      { title: "Al-Baqarah (Ayah 38-44)", duration: "19m 03s" },
      { title: "Al-Baqarah (Ayah 44-51)", duration: "21m 35s" },
      { title: "Al-Baqarah (Ayah 52-60)", duration: "20m 31s" },
      { title: "Al-Baqarah (Ayah 61-62)", duration: "19m 22s" },
      { title: "Al-Baqarah (Ayah 63-74)", duration: "20m 25s" },
      { title: "Al-Baqarah (Ayah 74-78)", duration: "20m 23s" },
      { title: "Al-Baqarah (Ayah 79-90)", duration: "20m 33s" },
      { title: "Al-Baqarah (Ayah 91-102)", duration: "17m 51s" },
      { title: "Al-Baqarah (Ayah 102-105)", duration: "20m 05s" },
      { title: "Al-Baqarah (Ayah 104-113)", duration: "59m 53s" },
      { title: "Al-Baqarah (Ayah 114-128)", duration: "01h 01m" },
      { title: "Al-Baqarah (Ayah 129-144)", duration: "01h 00m" },
      { title: "Al-Baqarah (Ayah 145-167)", duration: "59m 44s" },
      { title: "Al-Baqarah (Ayah 168-185)", duration: "01h 04m" },
      { title: "Al-Baqarah (Ayah 186-195)", duration: "57m 46s" },
      { title: "Al-Baqarah (Ayah 196-207)", duration: "49m 09s" },
      { title: "Al-Baqarah (Ayah 208-220)", duration: "48m 30s" },
      { title: "Al-Baqarah (Ayah 221-242)", duration: "58m 21s" },
      { title: "Al-Baqarah (Ayah 243-252)", duration: "29m 10s" },
      { title: "Al-Baqarah (Ayah 253-256)", duration: "59m 12s" },
      { title: "Al-Baqarah (Ayah 257-263)", duration: "01h 00m" },
      { title: "Al-Baqarah (Ayah 264-277)", duration: "58m 50s" },
      { title: "Al-Baqarah (Ayah 278-286)", duration: "51m 29s" },
    ],
  },
  {  
    title: "3-Surah Ali 'Imran",  
    duration: "14h 16m",  
    parts: [  
      { title: "Ayah 1-6", duration: "15m 47s" },  
      { title: "Ayah 7-13", duration: "21m 03s" },  
      { title: "Ayah 14-16", duration: "23m 22s" },  
      { title: "Ayah 17-18", duration: "25m 21s" },  
      { title: "Ayah 19-21", duration: "19m 05s" },  
      { title: "Ayah 22-25", duration: "12m 58s" },  
      { title: "Ayah 26-27", duration: "19m 59s" },  
      { title: "Ayah 28-30", duration: "23m 55s" },  
      { title: "Ayah 31", duration: "16m 06s" },  
      { title: "Ayah 32-37", duration: "25m 18s" },  
      { title: "Ayah 37-44", duration: "20m 52s" },  
      { title: "Ayah 45-50", duration: "22m 33s" },  
      { title: "Ayah 51-58", duration: "20m 20s" },  
      { title: "Ayah 59-68", duration: "20m 31s" },  
      { title: "Ayah 69-76", duration: "20m 14s" },  
      { title: "Ayah 77-84", duration: "17m 04s" },  
      { title: "Ayah 85-91", duration: "16m 20s" },  
      { title: "Ayah 92-93", duration: "19m 25s" },  
      { title: "Ayah 94-100", duration: "18m 51s" },  
      { title: "Ayah 101-102", duration: "17m 41s" },  
      { title: "Ayah 103", duration: "19m 21s" },  
      { title: "Ayah 103-104", duration: "25m 56s" },  
      { title: "Ayah 105-110", duration: "13m 29s" },  
      { title: "Ayah 111-113", duration: "18m 42s" },  
      { title: "Ayah 114-118", duration: "22m 17s" },  
      { title: "Ayah 119-122", duration: "19m 47s" },  
      { title: "Ayah 123-132", duration: "20m 14s" },  
      { title: "Ayah 133-138", duration: "21m 03s" },  
      { title: "Ayah 139-143", duration: "19m 57s" },  
      { title: "Ayah 144-152", duration: "20m 47s" },  
      { title: "Ayah 153-158", duration: "19m 54s" },  
      { title: "Ayah 159", duration: "30m 32s" },  
      { title: "Ayah 160-166", duration: "15m 02s" },  
      { title: "Ayah 167-170", duration: "15m 50s" },  
      { title: "Ayah 171-177", duration: "20m 20s" },  
      { title: "Ayah 178-184", duration: "18m 54s" },  
      { title: "Ayah 185-187", duration: "19m 33s" },  
      { title: "Ayah 188-189", duration: "15m 44s" },  
      { title: "Ayah 190-191", duration: "23m 54s" },  
      { title: "Ayah 192-195", duration: "16m 05s" },  
      { title: "Ayah 196-200", duration: "22m 52s" },  
      { title: "Closing Remarks Part 1", duration: "18m 52s" },  
      { title: "Closing Remarks Part 2", duration: "20m 34s" },  
    ],  
  },  
  {  
    title: "4-Surah An-Nisa'",  
    duration: "10h 13m",  
    parts: [  
      { title: "Ayah 1-4", duration: "22m 07s" },  
      { title: "Ayah 5-9", duration: "25m 01s" },  
      { title: "Ayah 10-15", duration: "23m 58s" },  
      { title: "Ayah 16-22", duration: "18m 54s" },  
      { title: "Ayah 23-25", duration: "18m 03s" },  
      { title: "Ayah 26-31", duration: "19m 51s" },  
      { title: "Ayah 32-34", duration: "25m 18s" },  
      { title: "Ayah 35-39", duration: "15m 52s" },  
      { title: "Ayah 40-49", duration: "22m 39s" },  
      { title: "Ayah 50-59", duration: "20m 26s" },  
      { title: "Ayah 60-66", duration: "19m 27s" },  
      { title: "Ayah 67-70", duration: "17m 08s" },  
      { title: "Ayah 71-75", duration: "20m 44s" },  
      { title: "Ayah 76-77", duration: "20m 17s" },  
      { title: "Ayah 78-84", duration: "22m 36s" },  
      { title: "Ayah 85-90", duration: "23m 39s" },  
      { title: "Ayah 91-94", duration: "21m 42s" },  
      { title: "Ayah 95-103", duration: "21m 58s" },  
      { title: "Ayah 104-113", duration: "16m 51s" },  
      { title: "Ayah 114-121", duration: "21m 12s" },  
      { title: "Ayah 122-128", duration: "19m 51s" },  
      { title: "Ayah 129-135", duration: "22m 33s" },  
      { title: "Ayah 136-143", duration: "17m 37s" },  
      { title: "Ayah 144-145", duration: "22m 59s" },  
      { title: "Ayah 146-151", duration: "23m 42s" },  
      { title: "Ayah 152-158", duration: "23m 23s" },  
      { title: "Ayah 159-163", duration: "21m 43s" },  
      { title: "Ayah 164-171", duration: "24m 14s" },  
      { title: "Ayah 172-176", duration: "19m 46s" },  
    ],  
  },
  {  
    title: "5-Surah Al-Ma'idah",  
    duration: "6h 44m",  
    parts: [  
      { title: "Ayah 1-3", duration: "26m 20s" },  
      { title: "Ayah 4-5", duration: "14m 21s" },  
      { title: "Ayah 5-8", duration: "20m 47s" },  
      { title: "Ayah 9-15", duration: "26m 11s" },  
      { title: "Ayah 16-26", duration: "16m 22s" },  
      { title: "Ayah 27-32", duration: "17m 54s" },  
      { title: "Ayah 33-35", duration: "23m 33s" },  
      { title: "Ayah 36-40", duration: "16m 34s" },  
      { title: "Ayah 41-42", duration: "21m 41s" },  
      { title: "Ayah 43-46", duration: "20m 30s" },  
      { title: "Ayah 47-49", duration: "19m 51s" },  
      { title: "Ayah 50-54", duration: "19m 50s" },  
      { title: "Ayah 54-63", duration: "20m 45s" },  
      { title: "Ayah 64-68", duration: "20m 45s" },  
      { title: "Ayah 69-76", duration: "21m 34s" },  
      { title: "Ayah 77-89", duration: "26m 52s" },  
      { title: "Ayah 90-97", duration: "22m 53s" },  
      { title: "Ayah 98-106", duration: "24m 11s" },  
      { title: "Ayah 107-120", duration: "22m 57s" },  
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
