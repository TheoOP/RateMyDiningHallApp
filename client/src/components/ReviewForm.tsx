import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import "../components/cssStyles/cssReview.css"

enum LocationsEnum {
    Fox = "Fox Dining Commons",
    Cumnock = "Cumnock MarketPlace",
    ICC = "Inn & Conference Dining",
    South = "South Campus Dining Commons"
  }

type Inputs = {
  Location: LocationsEnum,
  OverallRating: string,
  TasteRating: string,
  QualityRating: string,
  SelectionRating: string,
  CommentText: string,
  exampleRequired: string,
};


interface IFormInput {
    Location: LocationsEnum;
    OverallRating: Select,
    TasteRating: Range,
    QualityRating: Range,
    SelectionRating: Range,
    CommentText: string,
    exampleRequired: string,
  };



export default function ReviewForm() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data : IFormInput) => console.log(data);
  console.log(errors);
  
  return (
    <form className="ReviewForm" onSubmit={handleSubmit(onSubmit)}>
      <label>Dining Locations</label>
      <br />
      <select {...register("Location", { required: true })}>
        <option value="Fox Dining Commons">Fox Dining Commons</option>
        <option value=" Cumnock MarketPlace"> Cumnock MarketPlace</option>
        <option value=" Inn & Conference Dining"> Inn & Conference Dining</option>
        <option value=" South Campus Dining Commons"> South Campus Dining Commons</option>
      </select>
      <br />
      <label>Overall Rating</label>
      <br />
      <select {...register("OverallRating", { required: true })}>
        <option value="1 Star">1 Star</option>
        <option value=" 2 Star"> 2 Star</option>
        <option value=" 3 Star"> 3 Star</option>
        <option value=" 4 Star"> 4 Star</option>
        <option value=" 5 Star"> 5 Star</option>
      </select>
      <br />      <br />

      <label>Sub Ratings</label>
      <br/>
      <br/>
      <label>Taste Rating</label>

      <br />
      <input type="range" placeholder="Taste Rating" {...register("TasteRating", {})} />
      <br />
   
      <label>Quality Rating</label>
      <br />
      <input type="range" placeholder="Quality Rating" {...register("QualityRating", {required: true, maxLength: 100})} />
      <br />
      <label>Selection Ratings</label>
      <br />
      <input type="range" placeholder="Selection Rating" {...register("SelectionRating", {min: 1, maxLength: 5})} />
      <br />
      <label>Comment Text</label>
      <br />
      <textarea id="commentTitle" placeholder="Title" {...register("CommentText", {required: true, max: 1000, min: 10, maxLength: 1000})} />
      <textarea id="comment" placeholder="Review:" {...register("CommentText", {required: true, max: 1000, min: 10, maxLength: 1000})} />
      <br />

      <input type="submit" placeholder="Submit Review" />
    </form>
  );
}