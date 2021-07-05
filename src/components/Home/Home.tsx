import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiRightArrowAlt } from 'react-icons/bi';
import dayjs from 'dayjs';

import DashboardImage from 'assets/images/dashboard.png';
import DashboardDarkModeImage from 'assets/images/dashboard-dark.png';
import { Routes } from 'constants/enums';
import { ThemeContext } from 'context/ThemeContext';

import Header from '../Header/Header';
import LogIn from './LogIn';
import SignUp from './SignUp';

import './Home.scss';

function Home() {
  const { isDarkMode } = useContext(ThemeContext);
  const [isSigningUp, setIsSigningUp] = useState(false);

  const toggleIsSigningUp = () => {
    setIsSigningUp((prevIsSigningup) => !prevIsSigningup);
  };

  const showLoginForm = () => {
    setIsSigningUp(false);
  };

  return (
    <div className="home">
      <Header goToLogIn={showLoginForm} />
      <main className="home-above-the-fold">
        <section className="home-hero">
          <h1 className="logo big">MealPlanner</h1>
          <p>Your own personal menu board. No dry erase markers needed.</p>
          <div className="home-demo">
            <BiRightArrowAlt />{' '}
            <Link to={Routes.DEMO} className="accent-text">
              Try it out!
            </Link>
          </div>
          <div className="hero-image">
            <img
              src={isDarkMode ? DashboardDarkModeImage : DashboardImage}
              alt="MealPlanner Dashboard"
            />
          </div>
        </section>
        <section className="home-form">
          {isSigningUp ? (
            <SignUp toggleForm={toggleIsSigningUp} />
          ) : (
            <LogIn toggleForm={toggleIsSigningUp} />
          )}
        </section>
      </main>
      <footer className="home-footer">
        Copyright &copy;{dayjs().year()} Mike Sandula
      </footer>
    </div>
  );
}

export default Home;
