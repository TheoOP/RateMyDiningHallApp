import React, {useState , useEffect } from 'react';
import '../components/cssStyles/cssFoxReview.module.css'
import '../components/cssStyles/reviewPage.css'
// import { FaStar } from "react-icons/fa";
// import { FaRegStar } from "react-icons/fa";
// import { FaRegArrowAltCircleUp } from "react-icons/fa";
// import { FaArrowAltCircleUp } from "react-icons/fa";
// import { FaRegArrowAltCircleDown } from "react-icons/fa";
// import { FaArrowAltCircleDown } from "react-icons/fa";
// import { FaChevronRight } from "react-icons/fa";
// import { FaChevronDown } from "react-icons/fa";
import addReview from '../components/AddReview';
// import vote from '../components/Vote';

 //These are all imports to display the user's reviews -Ethan
import { getDocs, collection } from 'firebase/firestore';
import { db, auth } from "../config/firebase-config"


const ReviewCumnock = () => {

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
          <h1>Cumnock Hall Reviews</h1>
          


                <div>{reviewLists.map((review) => {
                    if (review.location == "Cumnock MarketPlace" ) {
                    return (
                      <div className="reviewPost">                    
                      { addReview(review.author.name, review.overallRating, review.tasteRating, review.qualityRating, review.selectionRating, review.reviewText, review.votes.upvotes, review.votes.downvotes, review.id, review.currentTime, review.title, review.upvoteUsers, review.downvoteUsers, auth.currentUser.uid) }
                  </div>
                    );
                }})} 
              </div>

            </div> 
          
          {/* This is here so the footer doesnt cover content */}
         <div style={{color:'transparent', fontSize: 0}}  >h </div>
          {/* <div font-size:'0px'>h</div> */}
        



        {/* <div className="menu">
        //   
        //     <a href="home.html" class="active">Home</a>
        //     <a href="review.html">Leave a Review</a>
        //     <a href="map.html">Map View</a>
        //     <a href="account.html">Account</a>
        //     
        //    <a href="/home" className="active">Home</a>
        //   <a href="/createReview">Leave a Review</a>
        //   <a href="/map">Map View</a>
        //   <a href="/account">Account</a> 
              // </div> */}
      </div>
</div>
  )
}

export default ReviewCumnock