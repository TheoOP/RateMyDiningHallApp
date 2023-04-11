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

function addReview(username: any, overallStars: any, tStars: any, qStars: any, sStars: any, reviewText: any, numUpvotes: any, numDownvotes: any, comments: any, postId: any, time: any, title: any){
   /* var [upvoteChecked, upvoteSetChecked] = useState(false);   
   const upvoteOnChange = () => {       
     upvoteSetChecked(!upvoteChecked);    
     if(!upvoteChecked){
         downvoteSetChecked(false);
     }
   }; 

   var [downvoteChecked, downvoteSetChecked] = useState(false);   
   const downvoteOnChange = () => {       
     downvoteSetChecked(!downvoteChecked);    
     if(!downvoteChecked){
         upvoteSetChecked(false);
     }
   }; 

   var [viewDetailsChecked, viewDetailsSetChecked] = useState(false);   
   const viewDetailsOnChange = () => {       
     viewDetailsSetChecked(!viewDetailsChecked);    
   }; 

   var [commentsChecked, commentsSetChecked] = useState(false);   
   const commentsOnChange = () => {       
       commentsSetChecked(!commentsChecked);    
   }; */
   
   var upvoteChecked = false;
   var downvoteChecked = false;
   var viewDetailsChecked = false;
   var commentsChecked = false;


   const upvoteOnChange = () => {                 
     if(!upvoteChecked){
       downvoteChecked = false;
     }
     upvoteChecked = !upvoteChecked;
     console.log('HIT');
     
     };

   const downvoteOnChange = () => {                 
     if(!downvoteChecked){
       upvoteChecked = false;
     }
     downvoteChecked = !downvoteChecked;
   };
   
   const viewDetailsOnChange = () => {       
     viewDetailsChecked = !viewDetailsChecked;    
   }; 

   const commentsOnChange = () => {       
       commentsChecked = !commentsChecked;    
   };



     const upId = 'upvote' + postId;
     const downId = 'downvote' + postId;
     const edId = 'ED' + postId;
     const edDivId = 'EDDiv' + postId; 

    
     return( 
     <div className="">  
     <h2>{title}</h2>
     <h3 className="username">{username} on {time.substring(4,15)}</h3>
     {1 <= overallStars ? (<FaStar size={42} className='highlight'/>) : (<FaRegStar size={42}/>)} 
     {2 <= overallStars ? (<FaStar size={42} className='highlight'/>) : (<FaRegStar size={42}/>)} 
     {3 <= overallStars ? (<FaStar size={42} className='highlight'/>) : (<FaRegStar size={42}/>)} 
     {4 <= overallStars ? (<FaStar size={42} className='highlight'/>) : (<FaRegStar size={42}/>)} 
     {5 <= overallStars ? (<FaStar size={42} className='highlight'/>) : (<FaRegStar size={42}/>)} 
        
     
     <h4 className="reviewText"> {reviewText} </h4>
     
{/*
     <label className="expandDetails">
     
         <input type="checkbox" name="expandDetailsCheck" className="expandDetailsCheckbox" id= {edId} onChange={viewDetailsOnChange}/> 
         View more details&nbsp;&nbsp;      
     {viewDetailsChecked ? (<FaChevronDown/>) : (<FaChevronRight/>)}}
     </label>*/}
     <hr/>
     <div className='edDiv' id= {edDivId}>
     
     <div className ="edNames">
     Taste: <br/>
     Selection: <br/>
     Quality:
     </div>
     <div className="edStars">
     {1 <= tStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
     {2 <= tStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
     {3 <= tStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
     {4 <= tStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
     {5 <= tStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
        

     <br/>
     {1 <= qStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
     {2 <= qStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
     {3 <= qStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
     {4 <= qStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
     {5 <= qStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
        

     <br/>
     {1 <= sStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
     {2 <= sStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
     {3 <= sStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
     {4 <= sStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
     {5 <= sStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
     </div>
     
     </div><hr/><br/>

      <div className='votesDiv'>
      <span className="numVotes" id="numUpvotes' + postId +'">   {upvoteChecked ? (numUpvotes + 1) : (numUpvotes)} </span>
      <label className="upvote">
      <input type="checkbox" name="upvoteCheck" className="voteCheckbox" id= {upId} onChange={upvoteOnChange}/>        
      {upvoteChecked ? (<FaArrowAltCircleUp size={42} />) : (<FaRegArrowAltCircleUp size={42} />)}         
     </label>
     <span className="numVotes" id="numDownvotes' + postId +'">  {downvoteChecked ? (numDownvotes + 1) : (numDownvotes)}   </span>
     <label className="downvote"> 
     <input type="checkbox" name="downvoteCheck" className="voteCheckbox" id= {downId} onChange={downvoteOnChange}/>        
     {downvoteChecked ? (<FaArrowAltCircleDown size={42} />) : (<FaRegArrowAltCircleDown size={42} />)}               
     </label>
     </div>

     <div className="comments">
     <label className="expandComments">
         <input type="checkbox" name="expandDetailsCheck" className="expandDetailsCheckbox" onChange={commentsOnChange}/>
         <span className="expandCommentsHeader">Expand comments&nbsp;&nbsp;</span>
         {commentsChecked ? (<FaChevronDown/>) : (<FaChevronRight/>)}
     </label>
 </div>
 </div>    
     )

};

export default addReview;