import React from 'react'
import './cssStyles/cssMap.module.css'

const Map = () => {
  return (
  
      <div className="content">
        <h1>Map</h1>
        <div className="map">
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1m8bVLxbCsU1O0BepGp5Eo-iWiNYkCB4&ehbc=2E312F"
           width="100%"
           height="600"
           frameBorder="0"
           style={{ border: 0 }}
           allowFullScreen
           aria-hidden="false"
           tabIndex= {0}
           />
        </div>
                {/* <div className="menu">
          OLD LINKS
            <a href="home.html" >Home</a>
            <a href="review.html">Leave a Review</a>
            <a href="map.html" class="active">Map View</a>
            <a href="account.html">Account</a>
           
          <a href="/home">Home</a>
          <a href="/createReview">Leave a Review</a>
          <a href="/map" className="active">Map View</a>
          <a href="/account">Account</a>
        </div> */}
      </div>


      


  )
}

export default Map