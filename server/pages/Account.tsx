import React from 'react'

const Account = () => {
  return (
    <div>
        
        <body>

            <div className = "content">

                <h1>Account</h1>

                <br/><br/>

                <div className = "userProfile"> 
                <form action="login.html">
                    <label htmlFor = "username">Username:</label>
                    <input type = "text" id = "username" name = "username" required/><br/><br/>
                    <label htmlFor = "username">Password:</label>
                    <input type = "text" id = "password" name = "password" required/><br/><br/>
                    <input type = "submit" value = "Log In"/>
                    </form>
                    
                    <br/>
                    
                    <form action="createAccount.html">
                        <input type = "submit" value = "Create Account"/>   
                    </form>
                </div>

            </div>


            <div className="menu">
                <a href="home.html" >Home</a>
                <a href="review.html">Leave a Review</a>
                <a href="map.html">Map View</a>
                <a href="account.html" className="active">Account</a>
            </div>

        </body>

    </div>
  )
}

export default Account