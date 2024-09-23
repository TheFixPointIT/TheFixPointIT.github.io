// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDfl8I3PlmLnZxjT-aRJkEUTmqko4kBsA",
  authDomain: "thefixpointit.firebaseapp.com",
  projectId: "thefixpointit",
  storageBucket: "thefixpointit.appspot.com",
  messagingSenderId: "1087554823563",
  appId: "1:1087554823563:web:75119a3f2a644811317b8e",
  measurementId: "G-46QN6FEE81"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;