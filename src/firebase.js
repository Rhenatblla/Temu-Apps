// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWFRZ5KzektVzOuX54Mieorf8djWSALfQ",
  authDomain: "proyek-akhir-winnicode.firebaseapp.com",
  projectId: "proyek-akhir-winnicode",
  storageBucket: "proyek-akhir-winnicode.firebasestorage.app",
  messagingSenderId: "811690446393",
  appId: "1:811690446393:web:583548d5013bbfb3b5c7e8",
  measurementId: "G-GLVV786G6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);