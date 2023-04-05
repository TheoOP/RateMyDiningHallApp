import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

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
    OverallRating: string,
    TasteRating: string,
    QualityRating: string,
    SelectionRating: string,
    CommentText: string,
    exampleRequired: string,
  };



export default function App() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data : IFormInput) => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Location</label>

      <select {...register("Location", { required: true })}>
        <option value="Fox Dining Commons">Fox Dining Commons</option>
        <option value=" Cumnock MarketPlace"> Cumnock MarketPlace</option>
        <option value=" Inn & Conference Dining"> Inn & Conference Dining</option>
        <option value=" South Campus Dining Commons"> South Campus Dining Commons</option>
      </select>
      
      <select {...register("OverallRating", { required: true })}>
        <option value="1 Star">1 Star</option>
        <option value=" 2 Star"> 2 Star</option>
        <option value=" 3 Star"> 3 Star</option>
        <option value=" 4 Star"> 4 Star</option>
        <option value=" 5 Star"> 5 Star</option>
        <option value=" "> </option>
      </select>
      <input type="range" placeholder="Taste Rating" {...register("TasteRating", {})} />
      <input type="range" placeholder="Quality Rating" {...register("QualityRating", {required: true, maxLength: 100})} />
      <input type="range" placeholder="Selection Rating" {...register("SelectionRating", {min: 1, maxLength: 5})} />
      <textarea {...register("CommentText", {required: true, max: 1000, min: 10, maxLength: 1000})} />

      <input type="submit" />
    </form>
  );
}