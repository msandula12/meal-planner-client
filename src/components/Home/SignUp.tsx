import { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BiHide, BiShow } from 'react-icons/bi';

import { getUserFromToken, saveUserToken, signUp } from 'api/users';
import { Routes } from 'constants/enums';
import { changeUser } from 'redux/reducers/userSlice';
import { isValidEmail } from 'utils/helpers';

import Tooltip from 'components/Tooltip/Tooltip';

const MIN_PASSWORD_LENGTH = 6;

type Props = {
  toggleForm: () => void;
};

function SignUp({ toggleForm }: Props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Focus first input field on init
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });

  const [values, setValues] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  const updateValue = ({ target }: BaseSyntheticEvent) => {
    setValues((prevValues) => ({
      ...prevValues,
      [target.name]: target.value,
    }));
  };

  const doPasswordsMatch =
    values.password.length >= MIN_PASSWORD_LENGTH &&
    values.confirmPassword.length >= MIN_PASSWORD_LENGTH &&
    values.password === values.confirmPassword;

  const canSignUp = Object.values(values).every((value) => Boolean(value));

  const handleSignUp = async (event: BaseSyntheticEvent) => {
    event.preventDefault();
    const currentErrors = {
      email: !isValidEmail(values.email)
        ? 'Please enter a valid email address.'
        : '',
      name: '',
      password:
        values.password.length < MIN_PASSWORD_LENGTH
          ? `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`
          : '',
      confirmPassword: !doPasswordsMatch ? 'Passwords must match.' : '',
    };

    setErrors(currentErrors);

    // If there are errors, don't submit
    if (Object.values(currentErrors).some((value) => Boolean(value))) {
      return;
    }

    await signUp(values)
      .then((res) => {
        const token = res.data.token;
        const user = getUserFromToken(token);
        saveUserToken(token);
        dispatch(changeUser(user));
        history.push(Routes.SCHEDULE);
      })
      .catch((error) => {
        setErrors(error.response.data);
      });
  };

  return (
    <form className="container form-box hoist" onSubmit={handleSignUp}>
      <h2 className="form-box-header">Sign Up</h2>
      <div className="form-box-inputs">
        <div className="input-group">
          <label className="input-label" htmlFor="name">
            Your name
          </label>
          <input
            className="text-input"
            id="name"
            name="name"
            onChange={updateValue}
            placeholder="Jane Doe"
            ref={inputRef}
            type="text"
            value={values.name}
          />
          {errors.name && <div className="error-msg">{errors.name}</div>}
        </div>
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
              placeholder={`Must be at least ${MIN_PASSWORD_LENGTH} characters`}
              type={showPassword ? 'text' : 'password'}
              value={values.password}
            />
            <Tooltip content={`${showPassword ? 'Hide' : 'Show'} password`}>
              <span className="input-icon" onClick={toggleShowPassword}>
                {showPassword ? <BiHide /> : <BiShow />}
              </span>
            </Tooltip>
          </div>
          {errors.password && (
            <div className="error-msg">{errors.password}</div>
          )}
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="input-with-icon">
            <input
              className="text-input"
              id="confirmPassword"
              name="confirmPassword"
              onChange={updateValue}
              placeholder="Passwords must match"
              type={showConfirmPassword ? 'text' : 'password'}
              value={values.confirmPassword}
            />
            <Tooltip
              content={`${showConfirmPassword ? 'Hide' : 'Show'} password`}
            >
              <span className="input-icon" onClick={toggleShowConfirmPassword}>
                {showConfirmPassword ? <BiHide /> : <BiShow />}
              </span>
            </Tooltip>
          </div>
          {errors.confirmPassword && (
            <div className="error-msg">{errors.confirmPassword}</div>
          )}
        </div>
      </div>
      <input
        className="btn btn-primary"
        disabled={!canSignUp}
        type="submit"
        value="Create a new account"
      />
      <p className="form-box-footer">
        Already have an account?{' '}
        <span className="accent-text" onClick={toggleForm}>
          Log in!
        </span>
      </p>
    </form>
  );
}

export default SignUp;
