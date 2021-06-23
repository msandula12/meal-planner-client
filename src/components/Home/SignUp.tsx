import { BaseSyntheticEvent, useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';

import { isValidEmail } from 'utils/helpers';

const MIN_PASSWORD_LENGTH = 6;

type Props = {
  toggleForm: () => void;
};

function SignUp({ toggleForm }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [values, setValues] = useState({
    email: '',
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

  const signUp = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    const currentErrors = {
      email: !isValidEmail(values.email)
        ? 'Please enter a valid email address.'
        : '',
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

    console.log(values);
  };

  return (
    <form className="container form-box hoist" onSubmit={signUp}>
      <h2 className="form-box-header">Sign Up</h2>
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
            <span
              className="input-icon"
              onClick={toggleShowConfirmPassword}
              title={`${showConfirmPassword ? 'Hide' : 'Show'} password`}
            >
              {showConfirmPassword ? <BiHide /> : <BiShow />}
            </span>
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
        value="Sign Up"
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
