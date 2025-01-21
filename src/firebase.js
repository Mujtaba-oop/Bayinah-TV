// firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAnalytics } from "firebase/analytics"; // If you need analytics

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFNrZnihpfmV7moNxSjL1ASI3DcrWbuXQ",
  authDomain: "bayyinah-c3122.firebaseapp.com",
  projectId: "bayyinah-c3122",
  storageBucket: "bayyinah-c3122.firebasestorage.app",
  messagingSenderId: "793977619509",
  appId: "1:793977619509:web:c3f6529992d14103495d7c",
  measurementId: "G-JEKW0H514H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

const analytics = getAnalytics(app); // Optional: for Firebase Analytics

export { db }; // Export Firestore
