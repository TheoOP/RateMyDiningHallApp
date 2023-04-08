import React from 'react'
import ReviewForm from '../components/ReviewForm';
import "../components/cssStyles/cssReview.css"

const Review = ({ isAuth }: any) => {
  return (
      <div className="ReviewContent">
        <h1 className='ReviewPageHeader' >How Was The Food Today?</h1>
        <ReviewForm isAuth = {isAuth}/>
        
      </div>
  )
}

export default Review;