// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyA-yCtOFv7szXaTQGS_Ef-gT8ZsuZIq3jU",
    authDomain: "laundry-3207b.firebaseapp.com",
    projectId: "laundry-3207b",
    storageBucket: "laundry-3207b.appspot.com",
    messagingSenderId: "608684816413",
    appId: "1:608684816413:web:e76325513c33c7e29b2ef4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db }