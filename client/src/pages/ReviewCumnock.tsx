import React, {useState , useEffect } from 'react';
import '../components/cssStyles/cssCumnockReview.module.css'

//These are all imports to display the user's reviews -Ethan
import { getDocs, collection } from 'firebase/firestore';
import { db } from "../config/firebase-config"
import { auth } from '../config/firebase-config'

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
          {/* <div id="reviewBody" className="reviewBody">
            <div className="reviewPost">
              <h2 className="username">Bimslow</h2>
              <span className="fa fa-star fa-2x highlight" />
              <span className="fa fa-star fa-2x highlight" />
              <span className="fa fa-star fa-2x highlight" />
              <span className="fa fa-star fa-2x" />
              <span className="fa fa-star fa-2x" />
              <h3 className="reviewText">Gave me food poisoning</h3>
              <span className="numVotes">6</span>
              <label className="upvote">
                <input type="checkbox" name="upvoteCheck" className="upvoteCheckbox" />          
                <span className="far fa-arrow-alt-circle-up fa-2x unchecked" />
                <span className="fas fa-arrow-alt-circle-up fa-2x checked" />
              </label>
              <span className="numVotes">6</span>
              <label className="downvote">
                <input type="checkbox" name="downvoteCheck" className="downvoteCheckbox" />          
                <span className="far fa-arrow-alt-circle-down fa-2x unchecked" />
                <span className="fas fa-arrow-alt-circle-down fa-2x checked" />
              </label>
              <label className="expandDetails">
                <input type="checkbox" name="expandDetailsCheck" className="expandDetailsCheckbox" />   
                View more details&nbsp;&nbsp;     
                <span className="fas fa-plus unchecked" />
                <span className="fas fa-minus checked" />
              </label>
              <div id="ED" hidden>
                <hr />
                Taste:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="fa fa-star highlight" />
                <span className="fa fa-star highlight" />
                <span className="fa fa-star highlight" />
                <span className="fa fa-star" />
                <span className="fa fa-star" /><br />
                Quality:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="fa fa-star highlight" />
                <span className="fa fa-star highlight" />
                <span className="fa fa-star highlight" />
                <span className="fa fa-star" />
                <span className="fa fa-star" /><br />
                Selection:&nbsp;&nbsp;&nbsp;
                <span className="fa fa-star highlight" />
                <span className="fa fa-star highlight" />
                <span className="fa fa-star highlight" />
                <span className="fa fa-star" />
                <span className="fa fa-star" /><br />
                <hr />
              </div>
              <div className="comments">
                <label className="expandComments">
                  <input type="checkbox" name="expandDetailsCheck" className="expandDetailsCheckbox" />   
                  <span className="expandCommentsHeader">Expand comments</span>
                  <span className="fas fa-angle-right unchecked" />
                  <span className="fas fa-angle-down checked" />
                </label>
              </div>
            </div>      
            <div className="reviewPost">
              <h2 className="username">Bimslow</h2>
              <span className="fa fa-star fa-2x highlight" />
              <span className="fa fa-star fa-2x highlight" />
              <span className="fa fa-star fa-2x highlight" />
              <span className="fa fa-star fa-2x" />
              <span className="fa fa-star fa-2x" />
              <h3 className="reviewText">Gave me food poisoning</h3>
              <label className="upvote">
                <input type="checkbox" name="upvoteCheck" className="upvoteCheckbox" />          
                <span className="far fa-arrow-alt-circle-up fa-2x unchecked" />
                <span className="fas fa-arrow-alt-circle-up fa-2x checked" />
              </label>
              <label className="downvote">
                <input type="checkbox" name="downvoteCheck" className="downvoteCheckbox" />          
                <span className="far fa-arrow-alt-circle-down fa-2x unchecked" />
                <span className="fas fa-arrow-alt-circle-down fa-2x checked" />
              </label>
              <label className="expandDetails">
                <input type="checkbox" name="expandDetailsCheck" className="expandDetailsCheckbox" />   
                View more details         
                <span className="fas fa-plus " />
              </label>
              <br />
              <div className="comments">
                <label className="expandComments">
                  <input type="checkbox" name="expandDetailsCheck" className="expandDetailsCheckbox" />   
                  <span className="expandCommentsHeader">Expand comments</span>
                  <span className="fas fa-angle-right unchecked" />
                  <span className="fas fa-angle-down checked" />
                </label>  
              </div>
            </div> 
            <div className="reviewPost">
              <h2 className="username">Bimslow</h2>
              <span className="fa fa-star fa-2x highlight" />
              <span className="fa fa-star fa-2x highlight" />
              <span className="fa fa-star fa-2x highlight" />
              <span className="fa fa-star fa-2x" />
              <span className="fa fa-star fa-2x" />
              <h3 className="reviewText">Gave me food poisoning</h3>
              <label className="upvote">
                <input type="checkbox" name="upvoteCheck" className="upvoteCheckbox" />          
                <span className="far fa-arrow-alt-circle-up fa-2x unchecked" />
                <span className="fas fa-arrow-alt-circle-up fa-2x checked" />
              </label>
              <label className="downvote">
                <input type="checkbox" name="downvoteCheck" className="downvoteCheckbox" />          
                <span className="far fa-arrow-alt-circle-down fa-2x unchecked" />
                <span className="fas fa-arrow-alt-circle-down fa-2x checked" />
              </label>
              <label className="expandDetails">
                <input type="checkbox" name="expandDetailsCheck" className="expandDetailsCheckbox" />   
                View more details         
                <span className="fas fa-plus " />
              </label>
              <br />
              <div className="comments">
                <label className="expandComments">
                  <input type="checkbox" name="expandDetailsCheck" className="expandDetailsCheckbox" />   
                  <span className="expandCommentsHeader">Expand comments</span>
                  <span className="fas fa-angle-right unchecked" />
                  <span className="fas fa-angle-down checked" />
                </label>
              </div>
            </div> 
            <div className="reviewPost">
              <h2 className="username">Bimslow</h2>
              <span className="fa fa-star fa-2x highlight" />
              <span className="fa fa-star fa-2x highlight" />
              <span className="fa fa-star fa-2x highlight" />
              <span className="fa fa-star fa-2x" />
              <span className="fa fa-star fa-2x" />
              <h3 className="reviewText">Gave me food poisoning</h3>
              <label className="upvote">
                <input type="checkbox" name="upvoteCheck" className="upvoteCheckbox" />          
                <span className="far fa-arrow-alt-circle-up fa-2x unchecked" />
                <span className="fas fa-arrow-alt-circle-up fa-2x checked" />
              </label>
              <label className="downvote">
                <input type="checkbox" name="downvoteCheck" className="downvoteCheckbox" />          
                <span className="far fa-arrow-alt-circle-down fa-2x unchecked" />
                <span className="fas fa-arrow-alt-circle-down fa-2x checked" />
              </label>
              <label className="expandDetails">
                <input type="checkbox" name="expandDetailsCheck" className="expandDetailsCheckbox" />   
                View more details         
                <span className="fas fa-plus " />
              </label>
              <br />
              <div className="comments">
                <label className="expandComments">
                  <input type="checkbox" name="expandDetailsCheck" className="expandDetailsCheckbox" />   
                  <span className="expandCommentsHeader">Expand comments</span>
                  <span className="fas fa-angle-right unchecked" />
                  <span className="fas fa-angle-down checked" />
                </label>
              </div> */}


                <div>{reviewLists.map((review) => {
                    if (review.location == "Cumnock MarketPlace" ) {
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