import firebase from 'firebase/app';
import "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore'; //I had to change this from firestore/lite to firestore for getting firestore data
import { getStorage, ref } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAutMwC8F-GDxxmBhV9VYIkRKSZOpq0Bg4",
    authDomain: "dailydininghallrater.firebaseapp.com",
    projectId: "dailydininghallrater",
    storageBucket: "dailydininghallrater.appspot.com",
    messagingSenderId: "34434878791",
    appId: "1:34434878791:web:39eef4e381fb91ba3d9062",
    measurementId: "G-33K3ZBP239"
  };


//initialize firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }