import React from 'react'

const Review = () => {
  return (
    <div>
        <body>

        <div className = "content">

            <h1>Leave a Review</h1>

            <h2> Select Location</h2>

            <form action="review_page.php">

              <label htmlFor ="location">Choose a Location</label>
              <select name = "location" id = "location" required>
                <option value = "fox">Fox Dining Commons</option>
                <option value = "south">South Campus Dining</option>
                <option value = "icc">ICC Dining Commons</option>
                <option value = "cumnock">Cumnock Hall</option>
              </select>
              

              <h2> Overall Rating</h2>

              
              <label htmlFor ="reviewMain">Main Review</label>
              <select name = "reviewMain" id = "reviewMain">
                <option value = "star1">1 Star</option>
                <option value = "star2">2 Star</option>
                <option value = "star3">3 Star</option>
                <option value = "star4">4 Star</option>
                <option value = "star5">5 Star</option>
              </select>

              

              <h2> Subcatagories</h2>

              

              <label htmlFor ="reviewTaste">Taste Review</label>
              <select name = "reviewTaste" id = "reviewTaste">
                <option value = "star1">1 Star</option>
                <option value = "star2">2 Star</option>
                <option value = "star3">3 Star</option>
                <option value = "star4">4 Star</option>
                <option value = "star5">5 Star</option>
              </select>

              <br></br>

              <label htmlFor ="reviewQuality">Quality Review</label>
              <select name = "reviewQuality" id = "reviewQuality">
                <option value = "star1">1 Star</option>
                <option value = "star2">2 Star</option>
                <option value = "star3">3 Star</option>
                <option value = "star4">4 Star</option>
                <option value = "star5">5 Star</option>
              </select>

              <br></br>

              <label htmlFor ="reviewSelection">Selection Review</label>
              <select name = "reviewSelection" id = "reviewSelection">
                <option value = "star1">1 Star</option>
                <option value = "star2">2 Star</option>
                <option value = "star3">3 Star</option>
                <option value = "star4">4 Star</option>
                <option value = "star5">5 Star</option>
              </select>

              
              <h2> Leave a Comment</h2>

              <br/><br/>

              <textarea id = "comment" name = "comment" >Enter Comment Here</textarea>
              //rows = "4" col = "50"

              <br></br>

              <input type = "submit" value ="Submit"/>
            
            </form>

        </div>

        <div className="menu">
            <a href="home.html" >Home</a>
            <a href="review.html" className="active">Leave a Review</a>
            <a href="map.html">Map View</a>
            <a href="account.html">Account</a>
          </div>

        </body>
    </div>
  )
}

export default Review