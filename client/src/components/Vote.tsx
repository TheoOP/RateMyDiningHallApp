import React, { Component, useState , useEffect } from 'react';
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";

import { addDoc,getDoc, doc, updateDoc, increment, collection } from 'firebase/firestore';
import { db } from "../config/firebase-config"
import { auth } from '../config/firebase-config'

function vote(numUpvotes: any, numDownvotes: any, postId: any, upvoteUsers: any, downvoteUsers: any, userId){
  var upvoteChecked = false;
   var downvoteChecked = false;
   var voteCount = (numUpvotes - numDownvotes);
   var positionUp; //saves position in upvote array if user has already upvoted
   var positionDown;

  const reviewsCollectionRef = collection(db, "reviews")

  //find if user has upvoted or downvoted the post already
  upvoteUsers.forEach((element, index) => {
    if(element == userId){
      upvoteChecked = true;
      positionUp = index;
    }
  });

  downvoteUsers.forEach((element, index) => {
    if(element == userId){
      downvoteChecked = true;
      positionDown = index;
    }
  });

  const handleUpvote = () => {                 
    if(!upvoteChecked){
      numUpvotes = numUpvotes + 1;
      upvoteUsers.push(userId);
    }
    else{
      numUpvotes = numUpvotes - 1;
      upvoteUsers.splice(positionUp, 1);
    }

    const updateVotes = async () => {
      const ticketRef = doc(db, "reviews", postId);
      await updateDoc(ticketRef,{
        downvoteUsers: downvoteUsers,
        upvoteUsers: upvoteUsers,
        votes: {
          upvotes: numUpvotes,
          downvotes: numDownvotes,
        },
      } );
    }

    console.log('upvote clicked');
    window.location.reload();
    };

    const handleDownvote = () => {                 
      if(!downvoteChecked){
        numDownvotes = numDownvotes + 1;
        downvoteUsers.push(userId);
      }
      else{
        numDownvotes = numDownvotes - 1;
        downvoteUsers.splice(positionDown, 1);
      }
  
      const updateVotes = async () => {
        const ticketRef = doc(db, "reviews", postId);
        await updateDoc(ticketRef,{
          downvoteUsers: downvoteUsers,
          upvoteUsers: upvoteUsers,
          votes: {
            upvotes: numUpvotes,
            downvotes: numDownvotes,
          },
        } );
      }
  
      console.log('downvote clicked');
      window.location.reload();
      };
 




  // render upvote and downvote buttons
  return(
    <div>
      <span>{voteCount}</span>
      <span className="numVotes">{numUpvotes} </span>
    <label className="upvote">
      <input type="checkbox" name="upvoteCheck" className="upvoteCheckbox" onChange={handleUpvote}/>        
      {upvoteChecked ? (<FaArrowAltCircleUp size={42} />) : (<FaRegArrowAltCircleUp size={42} />)}         
     </label>

     <span className="numVotes">{numDownvotes} </span>
    <label className="downvote">
      <input type="checkbox" name="downvoteCheck" className="downvoteCheckbox" onChange={handleDownvote}/>        
      {downvoteChecked ? (<FaArrowAltCircleDown size={42} />) : (<FaRegArrowAltCircleDown size={42} />)}         
     </label>
     
    </div>
  );
}

export default vote