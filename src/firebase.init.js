// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApT1b2Xg1NcwxCmJiopMsFePEm4haHUuo",
  authDomain: "to-do-apps-97.firebaseapp.com",
  projectId: "to-do-apps-97",
  storageBucket: "to-do-apps-97.appspot.com",
  messagingSenderId: "1089642647903",
  appId: "1:1089642647903:web:408249b9e4017894f5e6ea",
  measurementId: "G-20ZCVLXRKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;