import { BiCog, BiLogIn, BiLogOut } from 'react-icons/bi';

import './Header.scss';

function Header() {
  const user = {
    name: 'Mike',
  };

  return (
    <header>
      <nav className="nav">
        <span className="logo">MealPlanner</span>
        <span className="nav-actions">
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
