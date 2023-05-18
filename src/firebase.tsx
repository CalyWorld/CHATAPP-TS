// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const config = {
    API_KEY: `${process.env.REACT_APP_FIB_KEY}`
}
const firebaseConfig = {
    apiKey: config.API_KEY,
    authDomain: "chatgpt-clone-b624d.firebaseapp.com",
    projectId: "chatgpt-clone-b624d",
    storageBucket: "chatgpt-clone-b624d.appspot.com",
    messagingSenderId: "90556271830",
    appId: "1:90556271830:web:ccde5525fc359339ed4d77",
    measurementId: "G-9WZK28VX2E"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export default auth;
