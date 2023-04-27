import React, { Component, useState , useEffect } from 'react';
import { addDoc,getDoc, doc, updateDoc, increment, collection } from 'firebase/firestore';
import { useForm, SubmitHandler } from "react-hook-form";
import { db, auth } from "../config/firebase-config"
import { useNavigate } from "react-router-dom";
import Time from 'react-time';

import { Rating, Select } from '@mui/material'; //All imports for MUI API aka star ratings
import { styled } from '@mui/material/styles';


enum LocationsEnum {
    Fox = "Fox Dining Commons",
    Cumnock = "Cumnock MarketPlace",
    ICC = "Inn & Conference Dining",
    South = "South Campus Dining Commons"
  }

interface IFormInput {
    Location: LocationsEnum;
    OverallRating: Select,
    TasteRating: Range,
    QualityRating: Range,
    SelectionRating: Range,
    CommentText: string,
    exampleRequired: string,
    userComments: string,
  };

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#1769aa"
    },
    "& .MuiRating-iconHover": {
      color: "lightBlue"
    }
  });

export default function ReviewForm({ isAuth }) {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInput>();
  const [title, setTitle] = useState("");
  const [reviewText, setReviewText] = useState("");  
  const [overallRating, setOverallRating] = React.useState(0); //Overall rating
  const [tasteRating, setTasteRating] = React.useState(0); //Taste
  const [qualityRating, setQualityRating] = React.useState(0); //quality
  const [selectionRating, setSelectionRating] = React.useState(0); //selection
  const [location, setLocation] = useState("Fox Dining Commons"); //location selection
  const [currentTime, setCurrentTime] = useState(""); //current time
  const [upvoteUsers, setUpvoteUsers] = useState([]);
  const [downvoteUsers, setDownvoteUsers] = useState([]); 
  const [userComments, setuserComments] = useState([]); 

  const reviewsCollectionRef = collection(db, "reviews")
  const locationsCollectionRef = collection(db, "locations");

  
  let navigate = useNavigate();
  const createReview = async () => {
    await addDoc(reviewsCollectionRef, {
      title,
      reviewText,
      overallRating,
      tasteRating,
      qualityRating,
      selectionRating,
      location,
      currentTime,
      author: {name: auth.currentUser.displayName, id: auth.currentUser.uid},
      votes: {upvotes: 0, downvotes: 0},
      upvoteUsers,
      downvoteUsers,
      userComments,
    });
      // Calculate the new daily rating based on the review rating
      
      const locationRef = doc(db, 'locations',location);
      const locationDocSnap = await getDoc(locationRef);
      const locationData = locationDocSnap.data();
      const newDailyRatingCount = locationData.dailyratingcount + 1;
      const newDailyRating =
        (locationData.dailyrating * locationData.dailyratingcount +
          overallRating) /
        newDailyRatingCount;

      // Update the location document with the new daily rating
      await updateDoc(locationRef, {
        overallratingcount: increment(1),
        dailyratingcount: newDailyRatingCount,
        dailyrating: newDailyRating,
        overallrating: newDailyRating
      });
    
    // getlocations();


    navigate("/home"); //after you submit a post you go back to home page
  }

  

  /* is auth is not working
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
  */
   const onSubmit: SubmitHandler<IFormInput> = (data : IFormInput) => console.log(data);
  // console.log(errors);
  
  return (
    <form className="ReviewForm" onSubmit={handleSubmit(onSubmit)}>
      <label>Dining Locations</label>
      <br />
      <select {...register("Location", { required: true })} 
      onChange={(event) => {
        setLocation(event.target.value);
      }}
      >
        <option value="Fox Dining Commons">Fox Dining Commons</option>
        <option value="Cumnock MarketPlace"> Cumnock MarketPlace</option>
        <option value="Inn & Conference Dining"> Inn & Conference Dining</option>
        <option value="South Campus Dining Commons"> South Campus Dining Commons</option>
      </select>
      <br />
      <label>Overall Rating</label>
      {/* <Rating
        sx={{
          "& .MuiRating-iconFilled": {
            color: "#1769aa"
          },
          "& .MuiRating-iconHover": {
            color: "lightBlue"
          }
        }}
      /> */}
      <StyledRating
      name="simple-controlled"
      defaultValue={0}
      value={overallRating}
      onChange={(event, newValue) => {
        setOverallRating(newValue);
        console.log(newValue);
        }}
      />

      <br />
      <label className= 'SubRatingsHeader'>Sub Ratings</label>
      <br/>
      <label>Taste Rating</label>

      <StyledRating
      name="simple-controlled"
      defaultValue={0}
      value={tasteRating}
      onChange={(event, newValue) => {
        setTasteRating(newValue);
        console.log(newValue);
        }}
      />
   
      <label>Quality Rating</label>

      <StyledRating
      name="simple-controlled"
      defaultValue={0}
      value={qualityRating}
      onChange={(event, newValue) => {
        setQualityRating(newValue);
        console.log(newValue);
        }}
      />

      <label>Selection Ratings</label>

      <StyledRating
      name="simple-controlled"
      defaultValue={0}
      value={selectionRating}
      onChange={(event, newValue) => {
        setSelectionRating(newValue);
        console.log(newValue);
        }}
      />
      <br />
      <textarea id="commentTitle" placeholder="Title" {...register("CommentText", {required: true, max: 1000, min: 10, maxLength: 1000})} 
      onChange={(event) => {
        setTitle(event.target.value);
      }}
      required/>
      <textarea id="comment" placeholder="Review:" {...register("CommentText2", {required: true, max: 1000, min: 10, maxLength: 1000})} 
      onChange={(event) => {
        setReviewText(event.target.value);
        setCurrentTime(Date()); //sets the date for the review
      }}
      required/>
      <br />

      <input className="submitReviewClass" type="submit" placeholder="Submit Review" onClick={createReview} />
    </form>
  );
}