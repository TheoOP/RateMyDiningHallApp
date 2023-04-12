import { Link } from 'react-router-dom'

const Error404 = ({isAuth}) => {

  // let navigate = useNavigate();
  // {!isAuth && navigate("/Login") }

  return (
    <>    
    <h1>Page Not Found</h1>
    {isAuth ? <Link to={'/home'} >RETURN TO HOME</Link> :
     <Link to={'/Login'} >RETURN TO LOGIN</Link>        
    }
    </>
  )
}

export default Error404