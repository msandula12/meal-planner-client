import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { BiLogIn, BiLogOut } from 'react-icons/bi';

import { deleteUserToken } from 'api/users';
import { Routes } from 'constants/enums';
import { changeUser, selectCurrentUser } from 'redux/reducers/userSlice';

import './Header.scss';

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectCurrentUser);

  const logOut = () => {
    dispatch(changeUser(null));
    deleteUserToken();
    history.push(Routes.HOME);
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
              {/* <BiCog className="icon" title="Settings" /> */}
              <BiLogOut className="icon" onClick={logOut} title="Logout" />
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
