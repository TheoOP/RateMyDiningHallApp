import React from 'react'
import ReviewForm from '../components/ReviewForm';
import "../components/cssStyles/cssReview.css"

const Review = () => {
  return (
      <div className="ReviewContent">
        <h1 className='ReviewPageHeader' >How Was The Food Today?</h1>
        <ReviewForm />
        
      </div>
  )
}

export default Review;