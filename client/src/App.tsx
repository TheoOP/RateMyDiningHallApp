import { useState } from 'react'
import reactLogo from './assets/react.svg'
import firebase from 'firebase/app'
// import './App.css'
import './components/cssStyles/cssHome.css'


import './config/firebase-config';
import Home from "./pages/Home"
import HomeV2 from "./pages/HomeV2"

import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { addDoc, collection, getFirestore } from 'firebase/firestore/lite'
import { doc, setDoc } from "firebase/firestore"; 

import Navbar from './components/Navbar';
import Account from './pages/Account';
import Review from './pages/Review';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateAccount from './pages/CreateAccount';
import Map from './pages/Map';
import ReviewCumnock from './pages/ReviewCumnock';
import $ from 'jquery';
import ReviewFox from './pages/ReviewFox';
import ReviewICC from './pages/ReviewICC';
import ReviewSouth from './pages/ReviewSouth';
import Error404 from './pages/Error404';


function App() {

  function initFirebaseAuth() {
    // Listen to auth state changes.
    
  }
  
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          
          <Route path="/Home" element={<Home />} />
          <Route path="/HomeV2" element={<HomeV2 />} />
          <Route path="/" element={<Home />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/ReviewCumnock" element={<ReviewCumnock />} />
          <Route path="/ReviewFox" element={<ReviewFox />} />
          <Route path="/ReviewICC" element={<ReviewICC />} />
          <Route path="/ReviewSouth" element={<ReviewSouth />} />
          <Route path="/Review" element={<Review />} />
          <Route path='*' element={<Error404 />} />

        </Routes>
       

        <div className="container mt-2" style={{ marginTop: 40 }}>
        <Navbar />

      </div>
      </div>
    </BrowserRouter>

  )
}

export default App
// // Add a new document in collection "cities"
// await setDoc(doc(db, "cities", "LA"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA"
// });
// async function saveMessage(messageText) {
//   // Add a new message entry to the Firebase database.
//   try {
//     await addDoc(collection(getFirestore(), 'messages'), {
//       name: getUserName(),
//       text: messageText,
//       profilePicUrl: getProfilePicUrl(),
//       timestamp: serverTimestamp()
//     });
//   }
//   catch(error) {
//     console.error('Error writing new message to Firebase Database', error);
//   }
// }
