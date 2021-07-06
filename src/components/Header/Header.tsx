import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';

import { deleteUserToken } from 'api/users';
import { Routes } from 'constants/enums';
import { changeUser, selectCurrentUser } from 'redux/reducers/userSlice';

import DarkModeToggle from 'components/DarkModeToggle/DarkModeToggle';
import Tooltip from 'components/Tooltip/Tooltip';

import './Header.scss';

type Props = {
  goToLogIn?: () => void;
};

function Header({ goToLogIn }: Props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
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
          {location.pathname !== Routes.HOME && (
            <Link to={Routes.HOME} className="logo">
              MealPlanner
            </Link>
          )}
        </span>
        <span className="header-nav-actions">
          {user ? (
            <>
              <span>
                Welcome,{' '}
                <Tooltip content="Go to schedule">
                  <Link className="accent-text" to={Routes.SCHEDULE}>
                    {user.name}
                  </Link>
                </Tooltip>
                !
              </span>
              <Tooltip content="Log out">
                <span>
                  <BiLogOut className="icon" onClick={logOut} />
                </span>
              </Tooltip>
            </>
          ) : (
            <>
              <span className="accent-text" onClick={goToLogIn}>
                Please log in
              </span>
            </>
          )}
          <DarkModeToggle />
        </span>
      </nav>
    </header>
  );
}

export default Header;
