
import Button from '@mui/material/Button';
import { auth, provider } from '../config/firebase-config'
import { signInWithPopup, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

import "../components/cssStyles/cssAccount.css"

import ProfileCard  from '../components/ProfileCard'
import UserReviewsCard from '../components/UserReviewsCard';

const Account = ({setIsAuth} : any) => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", String(true));
      setIsAuth(true);
    });
  };
  let navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() =>{
      setIsAuth(false);
      localStorage.clear();
      navigate("/");
      // window.location.pathname ='/login'
    })
  }


  return (
            <div className="AccountContent">
            <h1>Account</h1>
            <br />
            <br />

              <div className='AccountBody' >
                <div className="userProfile"> 
                  <ProfileCard />
                </div>
                  <UserReviewsCard />
                  <br />

                <Button onClick={signUserOut} variant="contained">Sign Out</Button>

                
            </div>
            </div>
  )
}

export default Account