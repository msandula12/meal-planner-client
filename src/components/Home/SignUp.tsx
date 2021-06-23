import { BaseSyntheticEvent, useState } from 'react';

import { isValidEmail } from 'utils/helpers';

const MIN_PASSWORD_LENGTH = 6;

type Props = {
  toggleForm: () => void;
};

function SignUp({ toggleForm }: Props) {
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

  const signUp = () => {
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
    <div className="container form-box hoist">
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
          <input
            className="text-input"
            id="password"
            name="password"
            onChange={updateValue}
            placeholder={`Must be at least ${MIN_PASSWORD_LENGTH} characters`}
            type="password"
            value={values.password}
          />
          {errors.password && (
            <div className="error-msg">{errors.password}</div>
          )}
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="text-input"
            id="confirmPassword"
            name="confirmPassword"
            onChange={updateValue}
            placeholder="Passwords must match"
            type="password"
            value={values.confirmPassword}
          />
          {errors.confirmPassword && (
            <div className="error-msg">{errors.confirmPassword}</div>
          )}
        </div>
      </div>
      <button
        className="btn btn-primary"
        disabled={!canSignUp}
        onClick={signUp}
      >
        Sign Up
      </button>
      <p className="form-box-footer">
        Already have an account?{' '}
        <span className="accent-text" onClick={toggleForm}>
          Log in!
        </span>
      </p>
    </div>
  );
}

export default SignUp;
