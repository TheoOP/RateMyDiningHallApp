import React from 'react'
import StarIcon from '../assets/StarIcon.svg'
import FourStarIcon from '../assets/FourStarIcon.svg'
import FourPointFiveStarIcon from '../assets/FourPointFiveStarIcon.svg'


import RedLocationPin from '../assets/RedLocationPin.svg'

import "../components/cssStyles/cssHomeV2.css"

const TopRatedCard = (props: any) => {
  return (
    <div className='TopRatedCardContainer'>
        {/* <img src={FoxHall} height={200} /> */}
        <img className='TopRatedCardImage' src = {props.image} height = {props.height}/>
       
        <div className='TopRatedCardText'>
            <div className='TopRatedCardTitle'>
            {props.name}
            </div>

            <div className='TopRatedCardSubText'>
                <img className='StarIcon' src={FourPointFiveStarIcon} height={15} alt="Uml Logo Icon" />

                {props.rating}
                
                ({props.ratingCount}+ Ratings)
                <img className='RedLocationPinIcon' src={RedLocationPin} height={20} alt="Red Location Pin Icon" />

                {props.location}
            </div>
        </div> 

         
        <span>4.5</span>
    </div>
  )
}

export default TopRatedCard