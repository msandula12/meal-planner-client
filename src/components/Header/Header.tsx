import { Link } from 'react-router-dom';
import { BiCog, BiLogIn, BiLogOut } from 'react-icons/bi';

import { Routes } from 'constants/enums';

import './Header.scss';

function Header() {
  const user = {
    name: 'Guest',
  };

  return (
    <header>
      <nav className="header-nav">
        <span className="header-nav-logo">
          <Link to={Routes.HOME} className="logo">
            MealPlanner
          </Link>
        </span>
        <span className="header-nav-actions">
          {user ? (
            <>
              <span>Welcome, {user.name}!</span>
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
