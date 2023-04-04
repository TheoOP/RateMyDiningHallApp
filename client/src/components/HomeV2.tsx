import React from 'react'
import { Link } from 'react-router-dom'
import './cssStyles/cssHome.css'
import reactLogo from './assets/react.svg'
import UmlLogoIcon from '../assets/UmlLogoIcon.svg'
import LocationPin from '../assets/LocationPin.svg'
import PrimarySearchAppBar from './SearchBar'
import TopRatedCard from './TopRatedCard'
import FoxHallImg from '../assets/FoxDiningHall.png'
import CumnockImg from '../assets/CumnockMarketPlace.png'
import ICCDiningImg from '../assets/ICCDining.png'
import SouthCampusImg from '../assets/SouthCampusDining.jpg'

import DiningHallCard from './DiningHallCard'

const HomeV2 = () => {
  return (

      <div className="content">
        <h1>      
        <img className='LocationPin' src={LocationPin} height={45} alt="Uml Logo Icon" />
        <img className='HeaderIcon' src={UmlLogoIcon} height={45} alt="Uml Logo Icon" /> UMass Lowell</h1>
        
        <PrimarySearchAppBar />
        <br /><br />
                
        <h2 className='TopRatedHeader'>Top Rated Today</h2>
        <TopRatedCard 
        image = {FoxHallImg} 
        // height = {300}
        name =  "Fox Dining Commons"
        rating = {4.5}
        ratingCount = {137}
        location = "East Campus"
        />
        
        <h2 className='NearbyDiningHallsHeader'>Nearby Dining Halls</h2>

        <DiningHallCard 
        image = {CumnockImg} 
        // height = {300}
        name =  "Cumnock Marketplace"
        rating = {4.3}
        ratingCount = {65}
        location = "North Campus"
        />
         
        <DiningHallCard 
        image = {ICCDiningImg} 
        // height = {300}
        name =  "Inn & Conference Dining"
        rating = {4.1}
        ratingCount = {42}
        location = "Downtown Lowell"
        />

        <DiningHallCard 
        image = {SouthCampusImg} 
        // height = {300}
        name =  "South Campus Dining Commmons"
        rating = {4.3}
        ratingCount = {99}
        location = "Downtown Lowell"
        />
        <br />
        <br />
        <br />
        <br />

      </div>

      // <div className="menu">
      //     <a href="home.html" className="active">Home</a>
      //     <a href="review.html">Leave a Review</a>
      //     <a href="map.html">Map View</a>
      //     <a href="account.html">Account</a>
      //   </div> 


  )
}

export default HomeV2