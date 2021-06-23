import { useState } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

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
      <main className="home-above-the-fold">
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
            <SignUp toggleForm={toggleIsSigningUp} />
          ) : (
            <LogIn toggleForm={toggleIsSigningUp} />
          )}
        </div>
      </main>
      <footer className="home-footer">
        Copyright &copy;{dayjs().year()} Mike Sandula
      </footer>
    </div>
  );
}

export default Home;
