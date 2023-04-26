import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Account from './pages/Account';
import Review from './pages/Review';
import CreateAccount from './pages/CreateAccount';
import Map from './pages/Map';
import ReviewCumnock from './pages/ReviewCumnock';
import ReviewFox from './pages/ReviewFox';
import ReviewInn from './pages/ReviewInn';
import ReviewSouth from './pages/ReviewSouth';
import Error404 from './pages/Error404';
import Login from './pages/Login';
import './config/firebase-config';
import './components/cssStyles/cssHome.css';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const authToken = localStorage.getItem('isAuth');
    console.log("AUTH TOKEN IS ", authToken);
    setIsAuth(authToken === 'true');
  }, [localStorage.getItem('isAuth')]);

  function RequireAuth({ children }: { children: JSX.Element }) {
    let location = useLocation();
    // const authTok = localStorage.getItem('isAuth');
    // if (authTok === 'true'){
    //   setIsAuth(Boolean(true));
    //   console.log("AUTH changed ");
    //   console.log(isAuth);
    // }
    useEffect(() => {
      const authToken = localStorage.getItem('isAuth');
      console.log("AUTH IN REQ AUTH IS ");
  
      setIsAuth(authToken == 'true' ? true : false);
      console.log(isAuth);

    }, [localStorage.getItem('isAuth')]);
    console.log('inside req auth ');

    console.log(isAuth);
    useEffect(() => {
      console.log('isAuth value updated:', isAuth);
    }, [isAuth]);
  

    // if (!isAuth) {
    //   // Redirect them to the /login page, but save the current location they were
    //   // trying to go to when they were redirected. This allows us to send them
    //   // along to that page after they login, which is a nicer user experience
    //   // than dropping them off on the home page.
    //   return <Navigate to="/" state={{ from: location }} />;
    // }
  
    return children;
  }

  return (
      <div className="App">
      <Routes>
        <Route path="/" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/Home" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/Account" element={<RequireAuth><Account setIsAuth={setIsAuth}/></RequireAuth>} />
        <Route path="/CreateAccount" element={<RequireAuth><CreateAccount /></RequireAuth>} />
        <Route path="/Map" element={<RequireAuth><Map /></RequireAuth>} />
        <Route path="/ReviewCumnock" element={<RequireAuth><ReviewCumnock /></RequireAuth>} />
        <Route path="/ReviewFox" element={<RequireAuth><ReviewFox /></RequireAuth>} />
        <Route path="/ReviewInn" element={<RequireAuth><ReviewInn /></RequireAuth>} />
        <Route path="/ReviewSouth" element={<RequireAuth><ReviewSouth /></RequireAuth>} />
        <Route path="/Review" element={<RequireAuth><Review isAuth={isAuth} /></RequireAuth>} />
        <Route path="*" element={<Error404 isAuth={isAuth} />} />
      </Routes>
        {location.pathname !== '/' && (
        <div className="container mt-2" style={{ marginTop: 40 }}>
          <Navbar />
        </div>
      )}
      </div>
        
  );
}


export default App;
