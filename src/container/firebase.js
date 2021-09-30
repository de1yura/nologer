import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBzSChv-j-ByzrdwTXITEx7kAV86yBCIck",
  authDomain: "nology-login.firebaseapp.com",
  projectId: "nology-login",
  storageBucket: "nology-login.appspot.com",
  messagingSenderId: "123345195466",
  appId: "1:123345195466:web:a15681fb08907b75a4bf33",
  measurementId: "G-LF4FTYV9FW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const auth = firebase.auth();


