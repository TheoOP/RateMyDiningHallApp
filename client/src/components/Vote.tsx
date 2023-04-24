import React, { Component, useState , useEffect } from 'react';
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";

import { addDoc,getDoc, doc, updateDoc, increment, collection } from 'firebase/firestore';
import { db } from "../config/firebase-config"
import { auth } from '../config/firebase-config'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'

function vote(numUpvotes: any, numDownvotes: any, postId: any, upvoteUsersP: any, downvoteUsersP: any, userId: any, ){
  var upvoteChecked = false;
   var downvoteChecked = false;
   var voteCount = (numUpvotes - numDownvotes);
   var positionUp; //saves position in upvote array if user has already upvoted
   var positionDown;
   var voteNotInteractedWith = true;

  const reviewsCollectionRef = collection(db, "reviews")

  //find if user has upvoted or downvoted the post already
  upvoteUsersP.forEach((element, index) => {
    if(element == userId){
      upvoteChecked = true;
      positionUp = index;
    }
  });

  downvoteUsersP.forEach((element, index) => {
    if(element == userId){
      downvoteChecked = true;
      positionDown = index;
    }
  });

  console.log("upvoteChecked: " + upvoteChecked);



  const handleUpvote = () => {              
    if(voteNotInteractedWith){  
    if(!upvoteChecked){
      numUpvotes = numUpvotes + 1;
      upvoteUsersP.push(userId);
      if(downvoteChecked){
        numDownvotes = numDownvotes - 1;
        downvoteUsersP.splice(positionDown, 1);
      }
    }
    else{
      numUpvotes = numUpvotes - 1;
      upvoteUsersP.splice(positionUp, 1);
    }

    const updateUpvotes = async () => {
      const ticketRef = doc(db, "reviews", postId);
      
      await updateDoc(ticketRef,{
        downvoteUsers: downvoteUsersP,
        upvoteUsers: upvoteUsersP,
        votes: {
          upvotes: numUpvotes,
          downvotes: numDownvotes,
        },
      } );
    }
    updateUpvotes();
voteNotInteractedWith = false;
  //window.location.reload(false);
  }
    };

    const handleDownvote = () => {              
      if(voteNotInteractedWith){   
      if(!downvoteChecked){
        numDownvotes = numDownvotes + 1;
        downvoteUsersP.push(userId);
        if(upvoteChecked){
          numUpvotes = numUpvotes - 1;
          upvoteUsersP.splice(positionUp, 1);
        }
      }
      else{
        numDownvotes = numDownvotes - 1;
        downvoteUsersP.splice(positionDown, 1);
      }
  
      const updateDownvotes = async () => {
        const ticketRef = doc(db, "reviews", postId);
        console.log("updatDownvotes");
        await updateDoc(ticketRef,{
          downvoteUsers: downvoteUsersP,
          upvoteUsers: upvoteUsersP,
          votes: {
            upvotes: numUpvotes,
            downvotes: numDownvotes,
          },
        } );
      }
      updateDownvotes();
      voteNotInteractedWith = false;
      //window.location.reload(false);
    }
      };
 




  // render upvote and downvote buttons
  return(
    <div className = "votesDiv">
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