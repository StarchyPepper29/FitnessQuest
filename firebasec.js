// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ1Xy5qaaytWxAYQBZ4QVTLqRxm6m5LJU",
  authDomain: "fitnessquestproduction.firebaseapp.com",
  projectId: "fitnessquestproduction",
  storageBucket: "fitnessquestproduction.appspot.com",
  messagingSenderId: "859330042318",
  appId: "1:859330042318:web:b2e7e055b6b0b7a66cb39f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db ,getFirestore,collection, addDoc};