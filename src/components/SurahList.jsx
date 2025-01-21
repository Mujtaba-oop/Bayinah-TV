// src/components/SurahList.jsx
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, setDoc, getDoc, onSnapshot } from "firebase/firestore";
import Surah from "./Surah";

const surahData = [
  {
    title: "Introduction",
    duration: "01m 39s",
    parts: [{ title: "An Introduction", duration: "01m 39s" }],
  },
  {
    title: "Surah Al-Fatihah",
    duration: "3h",
    parts: [
      { title: "Al-Fatihah (Ayah 1a)", duration: "20m 28s" },
      { title: "Al-Fatihah (Ayah 1b)", duration: "20m 41s" },
    ],
  },
];

const SurahList = () => {
  const [watchedParts, setWatchedParts] = useState([]);

  // Fetch watched parts from Firestore
  useEffect(() => {
    const userRef = doc(db, "users", "user_id"); // Replace "user_id" with dynamic user ID
    const unsubscribe = onSnapshot(userRef, (docSnap) => {
      if (docSnap.exists()) {
        setWatchedParts(docSnap.data().watchedParts || []);
      }
    });

    return () => unsubscribe(); // Clean up listener on unmount
  }, []);

  // Update Firestore when a part is watched
  const handleWatch = async (surahTitle, partTitle) => {
    const updatedWatchedParts = [...watchedParts, { surah: surahTitle, part: partTitle }];
    setWatchedParts(updatedWatchedParts);

    const userRef = doc(db, "users", "user_id"); // Replace "user_id" with dynamic user ID
    await setDoc(
      userRef,
      { watchedParts: updatedWatchedParts },
      { merge: true }
    );
  };

  // Update Firestore when a part is unwatched
  const handleUnwatch = async (surahTitle, partTitle) => {
    const updatedWatchedParts = watchedParts.filter(
      (watched) => !(watched.surah === surahTitle && watched.part === partTitle)
    );
    setWatchedParts(updatedWatchedParts);

    const userRef = doc(db, "users", "user_id"); // Replace "user_id" with dynamic user ID
    await setDoc(
      userRef,
      { watchedParts: updatedWatchedParts },
      { merge: true }
    );
  };

  return (
    <div className="p-6 space-y-4">
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
  );
};

export default SurahList;
