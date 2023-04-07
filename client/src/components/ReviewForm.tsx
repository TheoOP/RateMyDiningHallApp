import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { Rating, Select } from '@mui/material';
import { styled } from '@mui/material/styles';

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

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#1769aa"
    },
    "& .MuiRating-iconHover": {
      color: "lightBlue"
    }
  });

export default function ReviewForm() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInput>();
 /* const [title, setTitle] = useState("");
  const [reviewText, setReviewText] = useState("");   //For some reason these caused problems with the review page showing up

  const reviewsCollectionRef = collection() */
const [value1, setValue1] = React.useState(0); //Overall rating
const [value2, setValue2] = React.useState(0); //Taste
const [value3, setValue3] = React.useState(0); //quality
const [value4, setValue4] = React.useState(0); //selection

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
      value={value1}
      onChange={(event, newValue) => {
        setValue1(newValue);
        console.log(newValue);
        }}
      />
      
      

      <br />

      <label className= 'SubRatingsHeader'>Sub Ratings</label>
      <br/>
      <label>Taste Rating</label>
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
      value={value2}
      onChange={(event, newValue) => {
        setValue2(newValue);
        console.log(newValue);
        }}
      />
   
      <label>Quality Rating</label>
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
      value={value3}
      onChange={(event, newValue) => {
        setValue3(newValue);
        console.log(newValue);
        }}
      />

      <label>Selection Ratings</label>
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
      value={value4}
      onChange={(event, newValue) => {
        setValue4(newValue);
        console.log(newValue);
        }}
      />
      <br />
      <textarea id="commentTitle" placeholder="Title" {...register("CommentText", {required: true, max: 1000, min: 10, maxLength: 1000})} />
      <textarea id="comment" placeholder="Review:" {...register("CommentText", {required: true, max: 1000, min: 10, maxLength: 1000})} />
      <br />

      <input type="submit" placeholder="Submit Review" />
    </form>
  );
}