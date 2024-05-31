// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  getDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZVaHUbgocOYQcVAM7mmcMPByKQQQrSrw",
  authDomain: "hallowed-kiln-327415.firebaseapp.com",
  projectId: "hallowed-kiln-327415",
  storageBucket: "hallowed-kiln-327415.appspot.com",
  messagingSenderId: "982477388269",
  appId: "1:982477388269:web:8237ad8b0dfd65636c0fe4",
  measurementId: "G-V8ZGNWMVZW",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const analytics = getAnalytics(app);
export { db, auth, doc, collection, getDoc, getDocs, addDoc, onSnapshot ,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
