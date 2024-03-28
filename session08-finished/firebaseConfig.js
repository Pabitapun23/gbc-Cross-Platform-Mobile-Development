// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

// TODO: Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpBfB7GpxHmqldiCBC5-omrnTHGx57xFA",
  authDomain: "session06-9c58e.firebaseapp.com",
  projectId: "session06-9c58e",
  storageBucket: "session06-9c58e.appspot.com",
  messagingSenderId: "1030176026203",
  appId: "1:1030176026203:web:1f7ffa939b2077c689197e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Services (database, auth, etc)
const db = getFirestore(app);
const auth = getAuth(app)

export {db, auth}