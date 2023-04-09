import React from 'react'
import { useState, useEffect } from 'react';
import { getDocs, setDoc, collection } from 'firebase/firestore';
import { db } from "../config/firebase-config"

import { Link } from 'react-router-dom'
import '../components/cssStyles/cssHome.css'
import reactLogo from './assets/react.svg'
import UmlLogoIcon from '../assets/UmlLogoIcon.svg'
import LocationPin from '../assets/LocationPin.svg'
import PrimarySearchAppBar from '../components/SearchBar'
import TopRatedCard from '../components/TopRatedCard'
import FoxImg from '../assets/FoxDiningHall.png'
import CumImg from '../assets/CumnockMarketPlace.png'
import ICCImg from '../assets/ICCDining.png'
import SouImg from '../assets/SouthCampusDining.jpg'


import DiningHallCard from '../components/DiningHallCard'
import { log } from 'console';

const Home = () => {

  const [locationLists, setlocationList] = useState<Array<any>>([]);
  const [topLocation, settopLocation] = useState();
  const locationsCollectionRef = collection(db, "locations");

  useEffect(() => {
    const getlocations = async() => {
      const data = await getDocs(locationsCollectionRef);
      const locations = data.docs.map((doc) => ({ ...doc.data()}));
      const topLocation = locations.reduce((prev, curr) => {
        return prev.dailyrating > curr.dailyrating ? prev : curr;
      }, locations[0]);
      settopLocation(topLocation);
      setlocationList(locations);
      console.log(topLocation);
      
    };    
    getlocations();
  }, []);
// filter out the top-rated location from the locations array
  const otherLocations = locationLists.filter(
    (location) => location.name !== topLocation?.name
  );

  //   // create a card for each location in the filtered array
    const otherCards = otherLocations.map((location, index) => (

        <TopRatedCard
          image={location.name.toLowerCase() === "fox dining commons" ? FoxImg :
          location.name.toLowerCase() === "cumnock marketplace" ? CumImg :
          location.name.toLowerCase() === "inn & conference dining" ? ICCImg :
          location.name.toLowerCase() === "south campus dining commons" ? SouImg : ''}
          name={location.name}
          rating={location.dailyrating}
          ratingCount={location.dailyratingcount}
          location={location.location}
        />
        
    ));
    // {console.log(`${location.name.slice(0, 3)}Img`)}

  return (

      <div className="content">
        <h1>      
        <img className='LocationPin' src={LocationPin} height={45} alt="Uml Logo Icon" />
        <img className='HeaderIcon' src={UmlLogoIcon} height={45} alt="Uml Logo Icon" /> UMass Lowell</h1>
        
        {/* <PrimarySearchAppBar /> */}
        <br />
        <div className='mainBody'> 
          
          <h2 className='TopRatedHeader'>Top Rated Today</h2>
          <DiningHallCard 
          image = {FoxImg} 
          // height = {300}
          name =  {topLocation?.name}
          rating = {topLocation?.dailyrating}
          ratingCount = {topLocation?.dailyratingcount}
          location = "East Campus"
          />
          
          <h2 className='NearbyDiningHallsHeader'>Nearby Dining Halls</h2>
          <br />
          <br />
          {otherCards}
{/* 
  
          <DiningHallCard 
          image = {CumImg} 
          // height = {300}
          name =  {locationLists[0]?.name}
          rating = {locationLists[0]?.dailyrating}
          ratingCount = {locationLists[0]?.dailyratingcount}
          location = {locationLists[0]?.location}
          /> */}
          <br />
          <br />
{/* 
          <DiningHallCard 
          image = {ICCDiningImg} 
          // height = {300}
          name =  "Inn & Conference Dining"
          rating = {4.1}
          ratingCount = {42}
          location = "Downtown Lowell"
          />
          <br />
          <br />

          <DiningHallCard 
          image = {SouthCampusImg} 
          // height = {300}
          name =  "South Campus Dining Commmons"
          rating = {4.3}
          ratingCount = {99}
          location = "Downtown Lowell"
          /> */}
          <br />
          <br />

          </div>   
      </div>


  )
}

export default Home