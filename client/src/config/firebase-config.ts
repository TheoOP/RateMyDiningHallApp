// import firebase from 'firebase/app';
import "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; //I had to change this from firestore/lite to firestore for getting firestore data
// import { getStorage, ref } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCskP3liwgra_C6HZDMpw3MjSIuxW5HYDk",
  authDomain: "dailydininghallraterv2.firebaseapp.com",
  projectId: "dailydininghallraterv2",
  storageBucket: "dailydininghallraterv2.appspot.com",
  // privateKey: process.env.FIREBASE_PRIVATE_KEY,
  // clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  messagingSenderId: "628069530534",
  appId: "1:628069530534:web:07cc4e91db428f68b5ad67",
  measurementId: "G-D0BHGKB7WC"
};


//initialize firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
