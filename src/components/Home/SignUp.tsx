import { BaseSyntheticEvent, useState } from 'react';

type Props = {
  toggleForm: () => void;
};

function SignUp({ toggleForm }: Props) {
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

  const signUp = () => {
    console.log(values);
  };

  const canSignUp = Object.values(values).every((value) => Boolean(value));

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
            placeholder="Must be at least 6 characters"
            type="password"
            value={values.password}
          />
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
