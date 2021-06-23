import { BaseSyntheticEvent, useState } from 'react';

type Props = {
  toggleForm: () => void;
};

function LogIn({ toggleForm }: Props) {
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const updateValue = ({ target }: BaseSyntheticEvent) => {
    setValues((prevValues) => ({
      ...prevValues,
      [target.name]: target.value,
    }));
  };

  const logIn = () => {
    const currentErrors = {
      email: '',
      password: '',
    };

    setErrors(currentErrors);

    // If there are errors, don't submit
    if (Object.values(currentErrors).some((value) => Boolean(value))) {
      return;
    }

    console.log(values);
  };

  const canLogIn = Object.values(values).every((value) => Boolean(value));

  return (
    <div className="container form-box hoist">
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
            placeholder="Password"
            type="password"
            value={values.password}
          />
          {errors.password && (
            <div className="error-msg">{errors.password}</div>
          )}
        </div>
      </div>
      <button className="btn btn-primary" disabled={!canLogIn} onClick={logIn}>
        Log In
      </button>
      <p className="form-box-footer">
        Don't have an account?{' '}
        <span className="accent-text" onClick={toggleForm}>
          Sign up!
        </span>
      </p>
    </div>
  );
}

export default LogIn;
