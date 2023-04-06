import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { auth, provider } from '../config/firebase-config.ts'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

import "../components/cssStyles/cssLogin.css"

const Login = ({setIsAuth}) => {
    let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/home")
    });
  };



  return (

        
            <div className="LoginPage">
                <div className= 'LoginBackground'></div>
                <div className= 'LoginTitle'>

                <h2 className ='animate-character' id = 'LoginHeader1' >DAILY DINING</h2>
                <br />
                <h2 className ='animate-character' id= "LoginHeader2">HALL RATER</h2> 

                </div>
                <button type="button" class="login-with-google-btn" onClick={signInWithGoogle} >
                 Sign in
                </button>

            </div>


  )
}

export default Login