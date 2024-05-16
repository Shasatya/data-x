// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTRO96Q2PqZYxbPPIJM27CiLWICZsxESo",
  authDomain: "react-auth-c03f1.firebaseapp.com",
  projectId: "react-auth-c03f1",
  storageBucket: "react-auth-c03f1.appspot.com",
  messagingSenderId: "5054111058",
  appId: "1:5054111058:web:c43b468ac7e24173716e8b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
