import {useState , useEffect } from 'react';
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
 import { addDoc,getDocs, doc, updateDoc, increment, collection, arrayUnion} from 'firebase/firestore';
import { db, auth } from "../config/firebase-config"


const ReviewICC = () => {

  const [reviewLists, setReviewList] = useState<Array<any>>([]);
  const [userComment, setuserComment] = useState(""); 

  const reviewsCollectionRef = collection(db, "reviews")

  useEffect(() => {
    const getReviews = async() => {
      const data = await getDocs(reviewsCollectionRef);
      setReviewList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
  
    getReviews();
  }, []); // add an empty dependency array here

  const updateUserComments = async(id) => {
    const ticketRef = doc(db, "reviews", id);
    await updateDoc(ticketRef, {userComments: arrayUnion(userComment + " -" + auth.currentUser.displayName)});
  };


  return (
    <div>
        <div>
          <div className="content">
            <h1>ICC Dining Reviews</h1>

            <div>{reviewLists.map((review) => {
                    if (review.location == "Inn & Conference Dining" ) {
                    return (
                      <div className="reviewPost">                    
                      { addReview(review.author.name, review.overallRating, review.tasteRating, review.qualityRating, review.selectionRating, review.reviewText, review.votes.upvotes, review.votes.downvotes, review.id, review.currentTime, review.title, review.upvoteUsers, review.downvoteUsers, auth.currentUser.uid) }
                      <input className ="createComment"
                      onChange={(e) => setuserComment(e.target.value)}
                      placeholder='This is where you input a comment'/>
                      <button 
                      className= "commentButton"
                      onClick={() => updateUserComments(review.id)}
                      >Leave Comment</button>
                          
                        
                        <h3 className="CommentTitle">Comments:</h3>
                        <div className="CommentSection">
                        {review.userComments.map((comment) => {
                          return(
                            
                          <div className="IndividualComment">{comment}</div>
                          
                          );
                        })}
                        </div>
                  </div>
                    );
                }})} 
              </div>
          </div>
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

export default ReviewICC