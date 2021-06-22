import { useState } from 'react';
import { Link } from 'react-router-dom';

import DashboardImage from 'assets/images/dashboard.png';
import { Routes } from 'constants/enums';

import LogIn from './LogIn';
import SignUp from './SignUp';

import './Home.scss';

function Home() {
  const [isSigningUp, setIsSigningUp] = useState(true);

  const toggleIsSigningUp = () => {
    setIsSigningUp((prevIsSigningup) => !prevIsSigningup);
  };

  return (
    <div className="home">
      <div className="home-hero">
        <div>
          <Link to={Routes.HOME} className="logo big">
            MealPlanner
          </Link>
        </div>
        <p>Your own personal meal calendar. No dry erase markers required.</p>
        <div className="hero-image">
          <img src={DashboardImage} alt="MealPlanner Dashboard" />
        </div>
      </div>
      <div className="home-form">
        {isSigningUp ? (
          <SignUp toggle={toggleIsSigningUp} />
        ) : (
          <LogIn toggle={toggleIsSigningUp} />
        )}
      </div>
    </div>
  );
}

export default Home;
