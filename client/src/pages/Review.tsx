import React from 'react'
import ReviewForm from '../components/ReviewForm';
import "../components/cssStyles/cssReview.css"

const Review = () => {
  return (
    <div>
        <div className="content">
        <h1 className='ReviewPageHeader' >How Was The Food Today?</h1>
        <ReviewForm />


      </div>

        {/* <div className="menu">
            <a href="home.html" >Home</a>
            <a href="review.html" className="active">Leave a Review</a>
            <a href="map.html">Map View</a>
            <a href="account.html">Account</a>
          </div> */}

    </div>
  )
}

export default Review;