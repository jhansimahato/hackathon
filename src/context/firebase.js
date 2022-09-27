import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAVjBwcM07AxcMX9zW76acL53PNMQwOwlQ",
    authDomain: "teensofgod-6c42b.firebaseapp.com",
    projectId: "teensofgod-6c42b",
    storageBucket: "teensofgod-6c42b.appspot.com",
    messagingSenderId: "1041900101887",
    appId: "1:1041900101887:web:728d2755838d55b65c6cca",
    measurementId: "G-JH9Z6968JD"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const db = app.firestore();
export const storage = app.storage();