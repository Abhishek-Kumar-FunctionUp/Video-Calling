// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOWIxyNbDMkTy7RPcTx0-COtBQ6aYN_50",
  authDomain: "zoom-clone-bfcfa.firebaseapp.com",
  databaseURL: "https://zoom-clone-bfcfa-default-rtdb.firebaseio.com",
  projectId: "zoom-clone-bfcfa",
  storageBucket: "zoom-clone-bfcfa.appspot.com",
  messagingSenderId: "880359579674",
  appId: "1:880359579674:web:1176c7bba31de5ff76b1a3",
  measurementId: "G-873XM8L852"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;