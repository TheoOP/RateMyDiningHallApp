import React from 'react'
import StarIcon from '../assets/StarIcon.svg'
import FourStarIcon from '../assets/FourStarIcon.svg'
import FourPointFiveStarIcon from '../assets/FourPointFiveStarIcon.svg'


import RedLocationPin from '../assets/RedLocationPin.svg'

import "../components/cssStyles/cssHomeV2.css"
import { Link } from 'react-router-dom'



const TopRatedCard = (props: any) => {
    var reviewLink = '/review';
    var extracted = props.name.split(" ");
    reviewLink += extracted[0];
  return (
    <div className='TopRatedCardContainer'>
        {/* <img src={FoxHall} height={200} /> */}
        <Link to={reviewLink} className='TopRatedCardImageLink'>
        <img className='TopRatedCardImage' src = {props.image} 
        // height = {props.height}
        />
        </Link>

        <div className='TopRatedCardText'>
            <div className='TopRatedCardTitle'>
            <Link to={reviewLink} className='TopRatedCardTitleLink'>
            <div className="review1">
                {props.name}
            </div>
            </Link>
            
            </div>

            <div className='TopRatedCardSubText'>
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

export default TopRatedCard