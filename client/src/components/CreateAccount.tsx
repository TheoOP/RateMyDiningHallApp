import React from 'react'
import "./cssStyles/cssCreateAccount.module.css"

const CreateAccount = () => {
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