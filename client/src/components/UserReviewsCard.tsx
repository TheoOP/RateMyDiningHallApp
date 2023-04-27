import { Rating } from '@mui/material';
import { auth } from '../config/firebase-config'

import { useState, useEffect } from 'react'; //These are all imports to display the user's reviews -Ethan
import {query, orderBy, getDocs, collection } from 'firebase/firestore';
import { db } from "../config/firebase-config"

const UserReviewsCard = () => {
const [reviewLists, setReviewList] = useState<Array<any>>([]);
  const reviewsCollectionRef = collection(db, "reviews")

  useEffect(() => {
    const getReviews = async() => {
      //const data = await getDocs(reviewsCollectionRef);
      const data = await getDocs(query(reviewsCollectionRef, orderBy('currentTime', 'desc')));
      setReviewList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
  
    getReviews();
  }, []); // add an empty dependency array here


  //const value = 4;
  return (
    <div className='UserReviewsCardContent'>
      {/* <div className='UserReviewNameTime'>
        <div className='UserReviewNameRating'>
        {auth.currentUser?.displayName}
          <Rating name="read-only" value={value} readOnly
            sx={{
              "& .MuiRating-iconFilled": {
                color: "#1769aa"
              },
              "& .MuiRating-iconHover": {
                color: "lightBlue"
              }
            }}
          />
        </div>
        <div>
          2 days Ago
        </div> 
      </div>

      
      <div className='UserReviewComment'>
        Comment info
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Maiores ex quis praesentium voluptatem, sapiente ut reprehenderit cum modi,
        et quos temporibus eveniet quod autem asperiores non aut vero molestias est?
        <button>
        View More Details
      </button>
      </div> */}
      <div>{reviewLists.map((review) => {
        if (review.author.name == auth.currentUser?.displayName) {
        return (
          <div className="review"> 
            
            <div className="reviewHeader">
              <div className="title">
                <span>
                <h3>Location: {review.location}</h3>
                <h5>{review.currentTime}</h5>
                <h2>{review.title}</h2>
                </span>
              </div>
            </div>
            <span>Ratings: Overall-{review.overallRating} Taste-{review.tasteRating} Quality-{review.qualityRating} Selection-{review.selectionRating}</span>
            <hr></hr>
            <div className="reviewTextContainer"> {review.reviewText} </div>
            <h4>By: {review.author.name}</h4>
            
          </div>
          );
        }})}  
      </div>
    </div>
  )
}

export default UserReviewsCard