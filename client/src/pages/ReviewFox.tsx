import React, {useState} from 'react'
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





const ReviewFox = () => {

  

    function addReview(username: any, overallStars: any, tStars: any, qStars: any, sStars: any, reviewText: any, numUpvotes: any, numDownvotes: any, comments: any, postId: any){
        var [upvoteChecked, upvoteSetChecked] = useState(false);   
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
        }; 
  
        const upId = 'upvote' + postId;
        const downId = 'downvote' + postId;
        const edId = 'ED' + postId;
        const edDivId = 'EDDiv' + postId; 
        return( 
        <div className="reviewPost">  
        <h2 className="username">{username}</h2>
        {1 <= overallStars ? (<FaStar size={42} className='highlight'/>) : (<FaRegStar size={42}/>)} 
        {2 <= overallStars ? (<FaStar size={42} className='highlight'/>) : (<FaRegStar size={42}/>)} 
        {3 <= overallStars ? (<FaStar size={42} className='highlight'/>) : (<FaRegStar size={42}/>)} 
        {4 <= overallStars ? (<FaStar size={42} className='highlight'/>) : (<FaRegStar size={42}/>)} 
        {5 <= overallStars ? (<FaStar size={42} className='highlight'/>) : (<FaRegStar size={42}/>)} 
           
        
        <h3 className="reviewText"> {reviewText} </h3>
        <span className="numVotes" id="numUpvotes' + postId +'">   {upvoteChecked ? (numUpvotes + 1) : (numUpvotes)} </span>
       <label className="upvote">
         <input type="checkbox" name="upvoteCheck" className="upvoteCheckbox" id= {upId} onChange={upvoteOnChange}/>        
         {upvoteChecked ? (<FaArrowAltCircleUp size={42} />) : (<FaRegArrowAltCircleUp size={42} />)}         
        </label>
        <span className="numVotes" id="numDownvotes' + postId +'">  {downvoteChecked ? (numDownvotes + 1) : (numDownvotes)}   </span>
        <label className="downvote"> 
        <input type="checkbox" name="downvoteCheck" className="downvoteCheckbox" id= {downId} onChange={downvoteOnChange}/>        
        {downvoteChecked ? (<FaArrowAltCircleDown size={42} />) : (<FaRegArrowAltCircleDown size={42} />)}               
        </label>
  
        <label className="expandDetails">
        
            <input type="checkbox" name="expandDetailsCheck" className="expandDetailsCheckbox" id= {edId} onChange={viewDetailsOnChange}/> 
            View more details&nbsp;&nbsp;      
            {viewDetailsChecked ? (<FaChevronDown/>) : (<FaChevronRight/>)}
        </label>
        
        <div id= {edDivId} className={viewDetailsChecked ? ('show') : ('hide')}>
        <hr/>Taste:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {1 <= tStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
        {2 <= tStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
        {3 <= tStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
        {4 <= tStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
        {5 <= tStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
           
  
        <br/>Quality:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {1 <= qStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
        {2 <= qStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
        {3 <= qStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
        {4 <= qStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
        {5 <= qStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
           
  
        <br/>Selection:&nbsp;&nbsp;&nbsp;
        {1 <= sStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
        {2 <= sStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
        {3 <= sStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
        {4 <= sStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
        {5 <= sStars ? (<FaStar size={24} className='highlight'/>) : (<FaRegStar size={24}/>)} 
           
        
         <br/><hr/></div>
  
        <br/>
  
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

  return (
    <div>
        <div>
            <div className="content">
                <h1>Fox Dining Commons Reviews</h1>
                <div id="reviewBody" className="reviewBody" />
                {addReview('APPENDED1', 4, 1, 0, 5, 'good food', 7, 3, 'erm', 1)}
                {addReview('APPENDED2', 4, 1, 0, 5, 'mid food', 7, 3, 'erm', 2)}
                {addReview('APPENDED3', 4, 1, 0, 5, 'bad food', 7, 3, 'erm', 3)}
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