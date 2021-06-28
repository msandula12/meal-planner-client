import { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { BiHide, BiShow } from 'react-icons/bi';
import classNames from 'classnames';

import {
  deleteUserToken,
  getUserFromToken,
  saveUserToken,
  signIn,
} from 'api/users';
import { Routes } from 'constants/enums';
import { changeUser, selectCurrentUser } from 'redux/reducers/userSlice';

import Loading from '../Loading/Loading';

type Props = {
  toggleForm: () => void;
};

function LogIn({ toggleForm }: Props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const user = useSelector(selectCurrentUser);

  // Focus first input field on init
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const updateValue = ({ target }: BaseSyntheticEvent) => {
    setValues((prevValues) => ({
      ...prevValues,
      [target.name]: target.value,
    }));
  };

  const handleLogIn = async (event: BaseSyntheticEvent) => {
    event.preventDefault();
    setIsLoading(true);
    const currentErrors = {
      email: '',
      password: '',
    };

    setErrors(currentErrors);

    // If there are errors, don't submit
    if (Object.values(currentErrors).some((value) => Boolean(value))) {
      return;
    }

    await signIn(values)
      .then((res) => {
        const token = res.data.token;
        const user = getUserFromToken(token);
        saveUserToken(token);
        dispatch(changeUser(user));
        history.push(Routes.SCHEDULE);
      })
      .catch((error) => {
        setErrors(error.response.data);
      })
      .finally(() => setIsLoading(false));
  };

  const logOut = () => {
    dispatch(changeUser(null));
    deleteUserToken();
  };

  const canLogIn = Object.values(values).every((value) => Boolean(value));

  const loadingCls = classNames({
    'loading-wrapper': isLoading,
  });

  if (user) {
    return (
      <div className="container form-box hoist">
        <div className="form-box-inputs text-center">
          <div className="input-group">
            <p>{user.name}, looks like you're already logged in.</p>
          </div>
          <div className="input-group">
            <p>
              You can view{' '}
              <Link className="accent-text" to={Routes.SCHEDULE}>
                your schedule
              </Link>
              , or you can log out below.
            </p>
          </div>
        </div>
        <button className="btn btn-primary" onClick={logOut}>
          Log Out
        </button>
      </div>
    );
  }

  return (
    <form className="container form-box hoist" onSubmit={handleLogIn}>
      <h2 className="form-box-header">Log In</h2>
      <div className="form-box-inputs">
        <div className="input-group">
          <label className="input-label" htmlFor="email">
            Email
          </label>
          <input
            className="text-input"
            id="email"
            name="email"
            onChange={updateValue}
            placeholder="jane.doe@email.com"
            ref={inputRef}
            type="text"
            value={values.email}
          />
          {errors.email && <div className="error-msg">{errors.email}</div>}
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="password">
            Password
          </label>
          <div className="input-with-icon">
            <input
              className="text-input"
              id="password"
              name="password"
              onChange={updateValue}
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              value={values.password}
            />
            <span
              className="input-icon"
              onClick={toggleShowPassword}
              title={`${showPassword ? 'Hide' : 'Show'} password`}
            >
              {showPassword ? <BiHide /> : <BiShow />}
            </span>
          </div>
          {errors.password && (
            <div className="error-msg">{errors.password}</div>
          )}
        </div>
      </div>
      <div className={loadingCls}>
        <input
          className="btn btn-primary fluid"
          disabled={!canLogIn}
          type="submit"
          value={isLoading ? ' ' : 'Log in to your account'}
        />
        {isLoading && <Loading />}
      </div>
      <p className="form-box-footer">
        Don't have an account?{' '}
        <span className="accent-text" onClick={toggleForm}>
          Sign up!
        </span>
      </p>
    </form>
  );
}

export default LogIn;
