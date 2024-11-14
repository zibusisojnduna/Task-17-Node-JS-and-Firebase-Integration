// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzZMImG5zyynVcXYIqCa68Z2WGasGyGQ4",
  authDomain: "task-17-node-js-and-firebase.firebaseapp.com",
  projectId: "task-17-node-js-and-firebase",
  storageBucket: "task-17-node-js-and-firebase.firebasestorage.app",
  messagingSenderId: "902929840024",
  appId: "1:902929840024:web:292c6606c192e042369ded",
  measurementId: "G-36QN6V8465"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);