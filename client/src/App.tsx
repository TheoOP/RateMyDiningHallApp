import React from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Navbar from './components/Navbar';
import Account from './pages/Account';
import Review from './pages/Review';
import CreateAccount from './pages/CreateAccount';
import Map from './pages/Map';
import ReviewCumnock from './pages/ReviewCumnock';
import ReviewFox from './pages/ReviewFox';
import ReviewICC from './pages/ReviewICC';
import ReviewSouth from './pages/ReviewSouth';
import Error404 from './pages/Error404';
import Login from './pages/Login'
import './config/firebase-config';

// import './App.css'
import './components/cssStyles/cssHome.css'

import $ from 'jquery';

import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { addDoc, collection, getFirestore } from 'firebase/firestore/lite'
import { doc, setDoc } from "firebase/firestore"; 


function App() {
  const [isAuth, setIsAuth] = useState(false); 
  const [isVisible, setIsVisible] = useState(isAuth);

  useEffect(() => {
    setIsVisible(isAuth);
  }, [isAuth]);

  
  // Toggle whatever the current value is
  // setIsVisible(prevIsVisibleValue => !prevIsVisibleValue);
  

  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Login setIsAuth = {setIsAuth}  />} />
          <Route path="/Account" element={<Account setIsAuth = {setIsAuth} />} />
          <Route path="/Login" element={<Login setIsAuth = {setIsAuth} />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/ReviewCumnock" element={<ReviewCumnock />} />
          <Route path="/ReviewFox" element={<ReviewFox />} />
          <Route path="/ReviewICC" element={<ReviewICC />} />
          <Route path="/ReviewSouth" element={<ReviewSouth />} />
          <Route path="/Review" element={<Review isAuth = {isAuth}/>} />
          <Route path='*' element={<Error404 isAuth = {isAuth} />} />

        </Routes>
       
        {isVisible && (
          <div className="container mt-2" style={{ marginTop: 40 }}>
            <Navbar />
          </div>
        )}
      
        
      </div>
    </BrowserRouter>

  )
}

export default App
