// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf88rFF-TUY4VZNLB6SopWjz43KzsXhaY",
  authDomain: "twitter-clone-b8a1a.firebaseapp.com",
  projectId: "twitter-clone-b8a1a",
  storageBucket: "twitter-clone-b8a1a.appspot.com",
  messagingSenderId: "340672457407",
  appId: "1:340672457407:web:48cbb61a2b21397f81740a",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
