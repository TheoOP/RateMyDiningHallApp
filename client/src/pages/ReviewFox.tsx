import React, {useState , useEffect } from 'react';
import $ from 'jquery';
import '../components/cssStyles/cssFoxReview.module.css'
import '../components/cssStyles/reviewPage.css'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import addReview from '../components/AddReview';
import vote from '../components/Vote';

 //These are all imports to display the user's reviews -Ethan
import { getDocs, collection } from 'firebase/firestore';
import { db } from "../config/firebase-config"
import { auth } from '../config/firebase-config'



const ReviewFox = () => {
    const [reviewLists, setReviewList] = useState<Array<any>>([]);

    const reviewsCollectionRef = collection(db, "reviews")
  
    useEffect(() => {
      const getReviews = async() => {
        const data = await getDocs(reviewsCollectionRef);
        setReviewList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
    
      getReviews();
    }, []); // add an empty dependency array here
  
    reviewLists.map((review) => {

    });  
    
    

  return (
    <div>
        <div>
            <div className="content">
                <h1>Fox Dining Commons Reviews</h1>
                {/* <div id="reviewBody" className="reviewBody" />
                {addReview('APPENDED1', 4, 1, 0, 5, 'good food', 7, 3, 'erm', 1)}
                {addReview('APPENDED2', 4, 1, 0, 5, 'mid food', 7, 3, 'erm', 2)}
                {addReview('APPENDED3', 4, 1, 0, 5, 'bad food', 7, 3, 'erm', 3)} */}
                <div>{reviewLists.map((review) => {
                    if (review.location == "Fox Dining Commons") {

                     
                    return (
                    <div className="reviewPost">                   
                        { addReview(review.author.name, review.overallRating, review.tasteRating, review.qualityRating, review.selectionRating, review.reviewText, 7, 3, 'erm', review.id, review.currentTime, review.title) }
                    </div>
                    );
                }})}  
                </div>
            </div>
            
            {/* This is here so the footer doesnt cover content */}
            {/* <div color:'transparent' font-size:'0px' height:20px>h</div> */}
            <div style={{color:'transparent', fontSize: 0, height: 20}} >h </div>
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
        </div>
        
    </div>
  )
  
}



export default ReviewFox