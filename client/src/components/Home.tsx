import React from 'react'
import { Link } from 'react-router-dom'
import './cssStyles/cssHome.css'

const Home = () => {
  return (
    <div>


      <div className="content">
        <h1>Results for: UMass Lowell</h1>
        <br /><br />
        <div className="box1">
          <Link to='/reviewFox'>
            <div className="review1">
              <p>Fox Dining Commons Reviews</p>
            </div>
          </Link>
       
        </div>
        <br />
        <div className="box2">
          <Link to='/reviewSouth'>
            <div className="review2">
              <p>South Campus Dining Reviews</p>
            </div>
          </Link>
        
        </div>
        <br />
        <div className="box3">
          <Link to='/reviewICC'>
            <div className="review3">
              <p>ICC Dining Reviews</p>
            </div>
          </Link>
        </div>
        <br />
        <div className="box4"> 
        <Link to='/reviewCumnock'>
            <div className="review4">
              <p>Cumnock Hall Reviews</p>
            </div>
        </Link>

        </div>
      </div>

      {/* <div className="menu">
          <a href="home.html" className="active">Home</a>
          <a href="review.html">Leave a Review</a>
          <a href="map.html">Map View</a>
          <a href="account.html">Account</a>
        </div> */}

</div>
  )
}

export default Home