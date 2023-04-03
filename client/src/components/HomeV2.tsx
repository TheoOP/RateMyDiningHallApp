import React from 'react'
import { Link } from 'react-router-dom'
import './cssStyles/cssHome.css'
import reactLogo from './assets/react.svg'
import UmlLogoIcon from '../assets/UmlLogoIcon.svg'
import LocationPin from '../assets/LocationPin.svg'
import PrimarySearchAppBar from './SearchBar'
import TopRatedCard from './TopRatedCard'
import FoxHall from '../assets/FoxDiningHall.png'

const HomeV2 = () => {
  return (
    <div>

      <div className="content">
        <h1>      
        <img className='LocationPin' src={LocationPin} height={45} alt="Uml Logo Icon" />
        <img className='HeaderIcon' src={UmlLogoIcon} height={45} alt="Uml Logo Icon" /> UMass Lowell</h1>
        
        <PrimarySearchAppBar />
        <br /><br />
        
        
        <h2 className='TopRatedHeader'>Top Rated Today</h2>
        <TopRatedCard 
        image = {FoxHall} 
        height = {300}
        name =  "Fox Dining Commons"
        rating = {4.5}
        ratingCount = {137}
        location = "East Campus"
        />
        
        
        
        <div className="box1">
          <Link to='/reviewFox'>
            <div className="review1">
              <p>Fox Dining Commons Reviews</p>
            </div>
          </Link>
       
        </div>
        <br />
        <div className="box2">
          <Link to='/reviewSouth'>
            <div className="review2">
              <p>South Campus Dining Reviews</p>
            </div>
          </Link>
        
        </div>
        <br />
        <div className="box3">
          <Link to='/reviewICC'>
            <div className="review3">
              <p>ICC Dining Reviews</p>
            </div>
          </Link>
        </div>
        <br />
        <div className="box4"> 
        <Link to='/reviewCumnock'>
            <div className="review4">
              <p>Cumnock Hall Reviews</p>
            </div>
        </Link>

        </div>
      </div>

      {/* <div className="menu">
          <a href="home.html" className="active">Home</a>
          <a href="review.html">Leave a Review</a>
          <a href="map.html">Map View</a>
          <a href="account.html">Account</a>
        </div> */}

</div>
  )
}

export default HomeV2