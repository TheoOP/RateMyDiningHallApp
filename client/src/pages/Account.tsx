import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { auth, provider } from '../config/firebase-config.ts'
import { signInWithPopup, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

import "../components/cssStyles/cssAccount.css"

const Account = ({setIsAuth}) => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
    });
  };
  
  const signUserOut = () => {
    signOut(auth).then(() =>{
      localStorage.clear();
      let navigate = useNavigate();
      navigate("/login");
    })
  }


  return (
            <div className="AccountContent">
            <h1>Account</h1>
              <div className='AccountBody' >
                <br /><br />
                <div className="userProfile"> 
                <form action="login.html">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required /><br /><br />
                    <label htmlFor="username">Password:</label>
                    <input type="text" id="password" name="password" required /><br /><br />
                    <br />

                </form>
                <Button onClick={signUserOut} variant="contained">Sign Out</Button>

                </div>
            </div>
            </div>
  )
}

export default Account