import React from 'react'

const Home = () => {
  return (
    <div>

      <body>

      <div className = "content">

          <h1>Results for: UMass Lowell</h1>

              <br></br>
              <div className = "box1">
                  <a href="reviewFox.html">
                      <div className = "review1">
                          <p>Fox Dining Commons Reviews</p>
                      </div>
                  </a>
              </div>
              <br></br>

              <div className = "box2">
                  <a href="reviewSouth.html">
                      <div className = "review2">
                          <p>South Campus Dining Reviews</p>
                      </div>      
                  </a>
              </div>
              
              <br></br>
      
              <div className = "box3">
                  <a href="reviewICC.html">
                      <div className = "review3">
                          <p>ICC Dining Reviews</p>
                      </div>
                  </a>
              </div>

              <br></br>

              <div className = "box4"> 
                  <a href="reviewCumnock.html">
                      <div className = "review4">
                          <p>Cumnock Hall Reviews</p>
                      </div>
                  </a>
              </div>
      </div>

      <div className="menu">
          <a href="home.html" className="active">Home</a>
          <a href="review.html">Leave a Review</a>
          <a href="map.html">Map View</a>
          <a href="account.html">Account</a>
        </div>

      </body>
</div>
  )
}

export default Home