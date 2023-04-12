import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from "../config/firebase-config"

// import { Link } from 'react-router-dom'
import '../components/cssStyles/cssHome.css'
import UmlLogoIcon from '../assets/UmlLogoIcon.svg'
import LocationPin from '../assets/LocationPin.svg'
import TopRatedCard from '../components/TopRatedCard'
import FoxImg from '../assets/FoxDiningHall.png'
import CumImg from '../assets/CumnockMarketPlace.png'
import ICCImg from '../assets/ICCDining.png'
import SouImg from '../assets/SouthCampusDining.jpg'


import DiningHallCard from '../components/DiningHallCard'

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

          <br />
          <br />

          <br />
          <br />

          </div>   
      </div>


  )
}

export default Home