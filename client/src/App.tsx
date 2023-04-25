import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useMatch, useLocation } from 'react-router-dom';
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

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsAuth(localStorage.getItem('authToken') ? true : false);
  }, []);

  return (



      <div className="App">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/Account" element={<Account setIsAuth={setIsAuth} />} />
          <Route path="/Login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/ReviewCumnock" element={<ReviewCumnock />} />
          <Route path="/ReviewFox" element={<ReviewFox />} />
          <Route path="/ReviewInn" element={<ReviewInn />} />
          <Route path="/ReviewSouth" element={<ReviewSouth />} />
          <Route path="/Review" element={<Review isAuth={isAuth} />} />
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
