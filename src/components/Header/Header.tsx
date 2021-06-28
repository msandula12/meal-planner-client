import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';

import { deleteUserToken } from 'api/users';
import { Routes } from 'constants/enums';
import { changeUser, selectCurrentUser } from 'redux/reducers/userSlice';

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
                <Link
                  className="accent-text"
                  to={Routes.SCHEDULE}
                  title="Go to schedule"
                >
                  {user.name}
                </Link>
                !
              </span>
              {/* <BiCog className="icon" title="Settings" /> */}
              <BiLogOut className="icon" onClick={logOut} title="Logout" />
            </>
          ) : (
            <>
              <span className="accent-text" onClick={goToLogIn}>
                Please log in
              </span>
            </>
          )}
        </span>
      </nav>
    </header>
  );
}

export default Header;
