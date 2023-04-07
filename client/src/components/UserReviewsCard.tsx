import React from 'react'
import { Rating } from '@mui/material';
import { auth } from '../config/firebase-config'

const UserReviewsCard = () => {
  const value = 4;
  return (
    <div className='UserReviewsCardContent'>
      <div className='UserReviewNameTime'>
        <div className='UserReviewNameRating'>
        {auth.currentUser?.displayName}
          <Rating name="read-only" value={value} readOnly
            sx={{
              "& .MuiRating-iconFilled": {
                color: "#1769aa"
              },
              "& .MuiRating-iconHover": {
                color: "lightBlue"
              }
            }}
          />
        </div>
        <div>
          2 days Ago
        </div> 
      </div>

      
      <div className='UserReviewComment'>
        Comment info
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Maiores ex quis praesentium voluptatem, sapiente ut reprehenderit cum modi,
        et quos temporibus eveniet quod autem asperiores non aut vero molestias est?
        <button>
        View More Details
      </button>
      </div>

    </div>
  )
}

export default UserReviewsCard