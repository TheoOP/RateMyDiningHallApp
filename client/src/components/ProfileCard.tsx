import { Rating } from '@mui/material';
import { auth } from '../config/firebase-config'

import { useState, useEffect } from 'react'; //These are all imports to display the user's reviews -Ethan
import { getDocs, collection } from 'firebase/firestore';
import { db } from "../config/firebase-config"

const ProfileCard = () => {
  const [reviewLists, setReviewList] = useState<Array<any>>([]);
  const reviewsCollectionRef = collection(db, "reviews")

  useEffect(() => {
    const getReviews = async() => {
      const data = await getDocs(reviewsCollectionRef);
      setReviewList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
  
    getReviews();
  }, []); // add an empty dependency array here

  
  let count = 0;
  

  console.log(auth.currentUser)
  return (
    <div className= 'ProfileCardContent'>
        <div className='ProfPicNameEmail'>
        <img className='ProfPic' src={auth.currentUser?.photoURL ?? undefined} referrerPolicy="no-referrer" />
          <div className='ProfNameEmail'>
            <div className='ProfName'>
              {auth.currentUser?.displayName}
            </div>
            {auth.currentUser?.email}
          </div>
        </div>
        
        <div className='ProfRankInfo'>

        <div>  
          {reviewLists.map((review) => {
            if (review.author.name == auth.currentUser?.displayName) {
                return(
                    <div>
                        {review.upvoteUsers.map((upVoters) => {
                          count++;
                        })}
                    </div>
                );   
              } 
            })}  {/* This loop essentially loops through reviews that are made by the author and counts its upvotes to get the users score*/}

          <div className='ProfRank'>RANK:
            {(() => {
                if (count >= 30) {
                  return (
                    <span className='ProfRankTitle'>DINING HALL EXPERT</span>
                  )
                } else if (count >= 10) {
                  return (
                    <span className='ProfRankTitle'>DINING HALL REVIEWER</span>
                  )
                } else {
                  return (
                    <span className='ProfRankTitle'>DINING HALL BEGINNER</span>
                  )
                }
            })()}
          </div>

          <div> 
            {(() => {
                if (count >= 30) {
                  return (
                    <div className='ProfUpvotes'>{count} Max Rank Upvotes!</div>
                  )
                } else if (count >= 10) {
                  return (
                    <div className='ProfUpvotes'>{count}/30 Upvotes!</div>
                  )
                } else {
                  return (
                    <div className='ProfUpvotes'>{count}/10 UpVotes!</div>
                  )
                }
            })()}
          </div>
      </div>

          
        </div>
        
    </div>
  )
}

export default ProfileCard;