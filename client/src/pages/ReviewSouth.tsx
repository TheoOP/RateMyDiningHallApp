import React, {useState , useEffect } from 'react';
import '../components/cssStyles/cssSouthReview.module.css'

//These are all imports to display the user's reviews -Ethan
import { getDocs, collection } from 'firebase/firestore';
import { db } from "../config/firebase-config"
import { auth } from '../config/firebase-config'

const ReviewSouth = () => {

  const [reviewLists, setReviewList] = useState<Array<any>>([]);

  const reviewsCollectionRef = collection(db, "reviews")

  useEffect(() => {
    const getReviews = async() => {
      const data = await getDocs(reviewsCollectionRef);
      setReviewList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
  
    getReviews();
  }, []); // add an empty dependency array here

  return (
    <div>
      <div>
        <div className="content">
          <h1>South Campus Dining Reviews</h1>
        </div>
        {/* <div className="menu">
          OLD LINKS:
          <a href="home.html" class="active">Home</a>
          <a href="review.html">Leave a Review</a>
          <a href="map.html">Map View</a>
          <a href="account.html">Account</a>
         
          <a href="/home" className="active">Home</a>
          <a href="/createReview">Leave a Review</a>
          <a href="/map">Map View</a>
          <a href="/account">Account</a>
        </div> */}
        <div>{reviewLists.map((review) => {
                    if (review.location == "South Campus Dining Commons" ) {
                    return (
                    <div className="reviewPost"> 
                        <hr></hr>
                        <div className="reviewHeader">
                        <div className="title">
                            <span>
                            <h5>{review.currentTime}</h5>
                            <h2>{review.title}</h2>
                            </span>
                        </div>
                        </div>
                        <span>Ratings: Overall-{review.overallRating} Taste-{review.tasteRating} Quality-{review.qualityRating} Selection-{review.selectionRating}</span>
                        <hr></hr>
                        <div className="reviewTextContainer"> {review.reviewText} </div>
                        <h4>By: {review.author.name}</h4>
                        <hr></hr>
                    </div>
                    );
                }})} 
              </div>
      </div>

    </div>
  )
}

export default ReviewSouth