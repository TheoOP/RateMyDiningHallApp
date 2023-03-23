import { useState } from 'react'
import reactLogo from './assets/react.svg'
import firebase from 'firebase/app'
import './App.css'
import './config/firebase-config';

import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { addDoc, collection, getFirestore } from 'firebase/firestore/lite'
import { doc, setDoc } from "firebase/firestore"; 

import Tasks from "./components/Tasks";


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
            {authorizedUser ? (
            <><p>Authorized user</p><h1>Tasks</h1>
              <Tasks token={sessionStorage.getItem("accessToken")}/>
              <button onClick={logOutGoogle}>Logout Button</button></>
          ): (<><button onClick={signInwithGoogle}>SignWithGoogle</button></>)}
        {/* displays sign in and sign out buttons */}
        
        
        
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
