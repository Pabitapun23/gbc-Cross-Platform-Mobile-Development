// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// TODO: Your web app's Firebase configuration
// 1. import the firebase project keys
const firebaseConfig = {
  apiKey: "AIzaSyAdJj87FffHmwtx1LWQLWxunJrKnCQF3Kk",
  authDomain: "react-native-project-769b5.firebaseapp.com",
  projectId: "react-native-project-769b5",
  storageBucket: "react-native-project-769b5.appspot.com",
  messagingSenderId: "786357998196",
  appId: "1:786357998196:web:92cb0706bebfff6c053721",
  measurementId: "G-5QDGDVVXJ5"
};


// 2. instantiate the firebase app
// 3. the "export" keyword enables the firebaseApp variable to be accessible outside this file
// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// 4. instantiate the auth variable
// export const auth = getAuth(firebaseApp)

// 5. @TODO: instantiate any other firebase services here
// Initialize Firebase Services (database, auth, etc)
export const db = getFirestore(firebaseApp)


