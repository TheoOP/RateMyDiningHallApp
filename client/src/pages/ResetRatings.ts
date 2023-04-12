import { useEffect } from 'react';
import { getDocs, doc, updateDoc, collection } from 'firebase/firestore';
import { db } from "../config/firebase-config"

interface Location {
  id: string;
  name: string;
  dailyrating: number;
  dailyratingcount: number;
  location: string;
}

const ResetRatings = () => {

  const locationsCollectionRef = collection(db, "locations");

  useEffect(() => {
    const resetRatings = async () => {
      const data = await getDocs(locationsCollectionRef);
      const locations = data.docs.map((doc) => ({ id: doc.id, ...doc.data() } as unknown as Location));
      
      const resetPromises = locations.map(async (location) => {
        const locationRef = doc(db, "locations", location.id);
        await updateDoc(locationRef, {
          dailyrating: 0,
          dailyratingcount: 0,
        });
      });
      

      await Promise.all(resetPromises);
    };
    
    const resetInterval = setInterval(() => {
      const now = new Date();
      if (now.getHours() === 5 && now.getMinutes() === 55) {
        resetRatings();
      }
    }, 60000); // check every minute

    return () => clearInterval(resetInterval);
  }, [locationsCollectionRef]);

  return null;
}

export default ResetRatings;
