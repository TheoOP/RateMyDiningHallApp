import React, { Component, useState , useEffect } from 'react';
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";

import { addDoc,getDoc, doc, updateDoc, increment, collection } from 'firebase/firestore';
import { db } from "../config/firebase-config"
import { auth } from '../config/firebase-config'

function vote(numUpvotes: any, numDownvotes: any, postId: any){
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const [voteCount, setVoteCount] = useState(numUpvotes - numDownvotes);

  const reviewsCollectionRef = collection(db, "reviews")
 

  const handleUpvote = () => {
    if (!upvoted) {
      setVoteCount(voteCount + 1);
      setUpvoted(true);
      setDownvoted(false);
      // update vote count in database


      const updateVotes = async () => {
        const ticketRef = doc(db, "reviews", postId);
        await updateDoc(ticketRef,{
          votes: {
            upvotes: numUpvotes + 1,
            downvotes: numDownvotes,
          },
        } );
      }
    }
  };

  const handleDownvote = () => {
    if (!downvoted) {
      setVoteCount(voteCount - 1);
      setUpvoted(false);
      setDownvoted(true);
      // update vote count in database

      const updateVotes = async () => {
        const ticketRef = doc(db, "reviews", postId);
        await updateDoc(ticketRef, {
          votes: {
            upvotes: numUpvotes + 1,
            downvotes: numDownvotes,
          },
        });
      } 
    }
  };

  // render upvote and downvote buttons
  return(
    <div>
      <span>{voteCount}</span>
      <span className="numVotes">{numUpvotes} </span>
    <label className="upvote">
      <input type="checkbox" name="upvoteCheck" className="upvoteCheckbox" onChange={handleUpvote}/>        
      {upvoted ? (<FaArrowAltCircleUp size={42} />) : (<FaRegArrowAltCircleUp size={42} />)}         
     </label>

     <span className="numVotes">{numDownvotes} </span>
    <label className="downvote">
      <input type="checkbox" name="downvoteCheck" className="downvoteCheckbox" onChange={handleDownvote}/>        
      {downvoted ? (<FaArrowAltCircleDown size={42} />) : (<FaRegArrowAltCircleDown size={42} />)}         
     </label>
     
    </div>
  );
}

export default vote