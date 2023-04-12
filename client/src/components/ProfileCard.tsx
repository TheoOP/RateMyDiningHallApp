
import { auth } from '../config/firebase-config'

const ProfileCard = () => {

  console.log(auth.currentUser)
  return (
    <div className= 'ProfileCardContent'>
        <div className='ProfPicNameEmail'>
        <img className='ProfPic' src={auth.currentUser?.photoURL ?? undefined} referrerPolicy="no-referrer" />
          <div className='ProfNameEmail'>
            <div className='ProfName'>
              {auth.currentUser?.displayName}
            </div>
            {auth.currentUser?.email}
          </div>
        </div>
        
        <div className='ProfRankInfo'>
          <div className='ProfRank'>RANK: <span className='ProfRankTitle'>DINING HALL EXPERT</span> </div>
          <div className='ProfUpvotes'> 80 / 100 Upvotes! </div>
        </div>

    </div>
  )
}

export default ProfileCard;