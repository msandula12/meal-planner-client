import { BaseSyntheticEvent, useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';

type Props = {
  toggleForm: () => void;
};

function LogIn({ toggleForm }: Props) {
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

  const logIn = (event: BaseSyntheticEvent) => {
    event.preventDefault();
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
    <form className="container form-box hoist" onSubmit={logIn}>
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
      <input
        className="btn btn-primary"
        disabled={!canLogIn}
        type="submit"
        value="Log In"
      />
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
