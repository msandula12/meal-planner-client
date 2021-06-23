import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiCog, BiLogIn, BiLogOut } from 'react-icons/bi';

import { Routes } from 'constants/enums';
import { selectCurrentUser } from 'redux/reducers/userSlice';

import './Header.scss';

function Header() {
  const userName = useSelector(selectCurrentUser);

  return (
    <header>
      <nav className="header-nav">
        <span className="header-nav-logo">
          <Link to={Routes.HOME} className="logo">
            MealPlanner
          </Link>
        </span>
        <span className="header-nav-actions">
          {userName ? (
            <>
              <span>Welcome, {userName}!</span>
              <BiCog className="icon" title="Settings" />
              <BiLogOut className="icon" title="Logout" />
            </>
          ) : (
            <>
              <span>Please log in</span>
              <BiLogIn className="icon" title="Login" />
            </>
          )}
        </span>
      </nav>
    </header>
  );
}

export default Header;
