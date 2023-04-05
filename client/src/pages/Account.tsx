import React from 'react'
import { Link } from 'react-router-dom'
import "../components/cssStyles/cssAccount.module.css"

const Account = () => {
  return (
    <div>
        


            <div className="content">
                <h1>Account</h1>
                <br /><br />
                <div className="userProfile"> 
                <form action="login.html">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required /><br /><br />
                    <label htmlFor="username">Password:</label>
                    <input type="text" id="password" name="password" required /><br /><br />
                    <input type="submit" defaultValue="Log In" />
                </form>
                <br />
                <Link to='/CreateAccount'><button defaultValue="Create Account">Create Account</button></Link>
                       

                </div>
            </div>

            {/* <div className="menu">
                <a href="home.html" >Home</a>
                <a href="review.html">Leave a Review</a>
                <a href="map.html">Map View</a>
                <a href="account.html" className="active">Account</a>
            </div> */}

        

    </div>
  )
}

export default Account