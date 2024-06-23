// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXrMzBK7fSpujS9RiYi4IjioSG7woz3Ss",
  authDomain: "netflix-gpt1012.firebaseapp.com",
  projectId: "netflix-gpt1012",
  storageBucket: "netflix-gpt1012.appspot.com",
  messagingSenderId: "463954004634",
  appId: "1:463954004634:web:114c5fd266d16ed61dad23",
  measurementId: "G-WJJPLNHL2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);