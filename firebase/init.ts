// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAme5jAQ0ZWn1hUfayWmQaJTrMTudWFBw",
  authDomain: "scp-foundation-lk.firebaseapp.com",
  projectId: "scp-foundation-lk",
  storageBucket: "scp-foundation-lk.appspot.com",
  messagingSenderId: "351062702482",
  appId: "1:351062702482:web:4b85f866326afc3cca294b",
  measurementId: "G-FK5Z46QZL7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
