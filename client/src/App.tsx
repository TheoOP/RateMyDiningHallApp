import { useState } from 'react'
import reactLogo from './assets/react.svg'
import firebase from 'firebase/app'
// import './App.css'
import './components/cssStyles/css.css'

import './config/firebase-config';
import Home from "./components/Home"

import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { addDoc, collection, getFirestore } from 'firebase/firestore/lite'
import { doc, setDoc } from "firebase/firestore"; 

import Tasks from "./components/Tasks";
import Navbar from './components/Navbar';
import Account from './components/Account';
import Review from './components/Review';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateAccount from './components/CreateAccount';
import Map from './components/Map';
import ReviewCumnock from './components/ReviewCumnock';
import $ from 'jquery';
import ReviewFox from './components/ReviewFox';
import ReviewICC from './components/ReviewICC';
import ReviewSouth from './components/ReviewSouth';


function App() {
  const [count, setCount] = useState(0);

  const provider = new GoogleAuthProvider();

  const auth = getAuth();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  const TorF : Boolean = false;


  const [authorizedUser,setAuthorizedUser] = useState(TorF || sessionStorage.getItem("accessToken"));


  async function signInwithGoogle() { 
    await signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // Access token of user
      const token = credential?.accessToken; //questionmark checks if credential is null
      console.log("TOKEN IS");
      console.log(token);
      
      // The signed-in user info.
      const user = result.user;
      if(user){
        user.getIdToken().then((tkn)=>{
          // set access token in session storage
          sessionStorage.setItem("accessToken", tkn);
          setAuthorizedUser(true);
        })
      }
      console.log(user);

   }).catch((error) => {
     // Handle Errors here.
     const errorCode = error.code;
     const errorMessage = error.message;
     // The email of the user's account used.
     const email = error.customData.email;
     // The AuthCredential type that was used.
     const credential = GoogleAuthProvider.credentialFromError(error);
   });
  }

  function logOutGoogle() {
    // Sign out of Firebase.
    signOut(auth).then(() => {      
      // clear session storage
      sessionStorage.clear();
      setAuthorizedUser(false);
      // window.location.replace("/");
      alert('Logged Out Successfully');
    }).catch((error) => {
      // An error happened.
      alert(error);
    });
  }
  
  onAuthStateChanged(auth, user=>{
    console.log({user});
    if(user != null){
      // const userRef = collection(db, `cases/${user.uid}`);
      // //send chat
      // addDoc(userRef, {message: "Test: Sending Message to DB!"});
    }
  })
  function initFirebaseAuth() {
    // Listen to auth state changes.
    
  }
  
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/ReviewCumnock" element={<ReviewCumnock />} />
          <Route path="/ReviewFox" element={<ReviewFox />} />
          <Route path="/ReviewICC" element={<ReviewICC />} />
          <Route path="/ReviewSouth" element={<ReviewSouth />} />


          <Route path="/Review" element={<Review />} />

        </Routes>
        
       
        <div className="card">
              {authorizedUser ? (
              <><p>Authorized user</p>
              
                <button onClick={logOutGoogle}>Logout Button</button></>
            ): (<><button onClick={signInwithGoogle}>SignWithGoogle</button></>)}
          {/* displays sign in and sign out buttons */}
          
        </div>
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
