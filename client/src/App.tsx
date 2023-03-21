import { useState } from 'react'
import reactLogo from './assets/react.svg'
import firebase from 'firebase/app'
import 'firebase/auth'
import './App.css'
import './config/firebase-config';

import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { addDoc, collection, getFirestore } from 'firebase/firestore/lite'
import { doc, setDoc } from "firebase/firestore"; 

// // Add a new document in collection "cities"
// await setDoc(doc(db, "cities", "LA"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA"
// });


function App() {
  const [count, setCount] = useState(0);
  const auth = getAuth();
  async function loginWithGoogle() { //signs in userinto app through google
    var provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }

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


  
  function logOutGoogle() {
    // Sign out of Firebase.
    signOut(auth);
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
  

  // const provider = new GoogleAuthProvider();
  // const loginWithGoogle = () => signInWithPopup(getAuth(),provider);
  // console.log(loginWithGoogle);
  // console.log(provider);
  // console.log("HELLO");
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is now {count}
        </button>
          <section id="whenSignedOut">

          <button id="signInBtn">Sign in with Google</button>

          </section>

          <section id="whenSignedIn" hidden="hidden">

          <div id="userDetails"></div>

          <button id="signOutBtn">Sign Out</button>

          </section>
        <button onClick={loginWithGoogle}>
          Login with Google
        </button>
        <button onClick={logOutGoogle}>
          Logout
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR CHANGE
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
