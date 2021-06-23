type Props = {
  toggle: () => void;
};

function SignUp({ toggle }: Props) {
  const updateInput = () => {};

  return (
    <div className="container form-box hoist">
      <h2 className="form-box-header">Sign Up</h2>
      <div className="input-group">
        <label className="input-label" htmlFor="email">
          Email
        </label>
        <input
          className="text-input"
          id="email"
          onChange={updateInput}
          placeholder="jane.doe@email.com"
          type="text"
        />
      </div>
      <div className="input-group">
        <label className="input-label" htmlFor="password">
          Password
        </label>
        <input
          className="text-input"
          id="password"
          onChange={updateInput}
          placeholder="Must be at least 6 characters"
          type="password"
        />
      </div>
      <div className="input-group">
        <label className="input-label" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          className="text-input"
          id="confirmPassword"
          onChange={updateInput}
          placeholder="Confirm password"
          type="password"
        />
      </div>
      <p className="form-box-footer">
        Already have an account?{' '}
        <span className="accent-text" onClick={toggle}>
          Log in!
        </span>
      </p>
    </div>
  );
}

export default SignUp;
