import React, { useState } from 'react'
import "./cssStyles/cssCreateAccount.module.css"
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from '@firebase/auth';

const CreateAccount = () => {
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




  return (
    <div>
        <div>
        <div className="content">
            <h1>Create an Account</h1>
            <br /><br />
            <div className="userProfile"> 
            <form action="makeAccount.html">
                <label htmlFor="username">Enter Unique Username:</label>
                <input type="text" id="makeUsername" name="makeUsername" required /><br /><br />
                <label htmlFor="username">Enter Unique Password:</label>
                <input type="text" id="makePassword" name="makePassword" required /><br /><br />
                <input type="submit" defaultValue="Make Account" />
            </form>
            <br />
            <div className="LogIn">
              {authorizedUser ? (
              <><p>Authorized user</p>
              
                <button onClick={logOutGoogle}>Logout Button</button></>
              ): (<><button onClick={signInwithGoogle}>SignWithGoogle</button></>)}
              {/* displays sign in and sign out buttons */}
          
        </div>
            
            </div>
        
        </div>

        <div className="menu">
          {/*
            <a href="home.html" >Home</a>
            <a href="review.html">Leave a Review</a>
            <a href="map.html">Map View</a>
            <a href="account.html" class="active">Account</a>
        */}
          {/* <a href="/home">Home</a>
          <a href="/createReview">Leave a Review</a>
          <a href="/map">Map View</a>
          <a href="/account" className="active">Account</a> */}
        </div>
        </div>
    </div>
  )
}
export default CreateAccount;