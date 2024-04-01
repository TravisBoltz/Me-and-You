// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {};
// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

const db = getFirestore(app);
const rtdb = getDatabase();

export { app, auth, db, rtdb };
