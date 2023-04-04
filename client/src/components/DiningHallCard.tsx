import React from 'react'
import StarIcon from '../assets/StarIcon.svg'
import FourStarIcon from '../assets/FourStarIcon.svg'
import FourPointFiveStarIcon from '../assets/FourPointFiveStarIcon.svg'
import RedLocationPin from '../assets/RedLocationPin.svg'

import "../components/cssStyles/cssHomeV2.css"
import { Link } from 'react-router-dom'



const DiningHallCard = (props: any) => {
    var reviewLink = '/review';
    var extracted = props.name.split(" ");
    reviewLink += extracted[0];
  return (
    <div className='DiningHallCardContainer'>
        {/* <img src={FoxHall} height={200} /> */}
        <Link to={reviewLink} className='DiningHallCardImageLink'>
        <img className='DiningHallCardImage' src = {props.image} 
        // height = {props.height}
        />
        </Link>

        <div className='DiningHallCardText'>
            <div className='DiningHallCardTitle'>
            <Link to={reviewLink} className='DiningHallCardTitleLink'>
            <div className="review1">
                {props.name}
            </div>
            </Link>
            
            </div>

            <div className='DiningHallCardSubText'>
                <img className='StarIcon' src={FourPointFiveStarIcon} height={15} alt="Uml Logo Icon" />

                {props.rating}
                
                ({props.ratingCount}+ Ratings)
                <img className='RedLocationPinIcon' src={RedLocationPin} height={20} alt="Red Location Pin Icon" />

                {props.location}
            </div>
        </div> 

    </div>
  )
}

export default DiningHallCard