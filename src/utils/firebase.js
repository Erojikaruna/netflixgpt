// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtCrtr0iJ-W7mxJBBDXTgUr_6gEWeP1Jg",
  authDomain: "netflixgpt-9a3f7.firebaseapp.com",
  projectId: "netflixgpt-9a3f7",
  storageBucket: "netflixgpt-9a3f7.appspot.com",
  messagingSenderId: "661985877688",
  appId: "1:661985877688:web:ec8e2b92a6c8f194bede4d",
  measurementId: "G-MJN433XGFF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
