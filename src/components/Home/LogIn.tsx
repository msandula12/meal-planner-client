type Props = {
  toggle: () => void;
};

function LogIn({ toggle }: Props) {
  const updateInput = () => {};

  return (
    <div className="container form-box hoist">
      <h2 className="form-box-header">Log In</h2>
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
          placeholder="Password"
          type="password"
        />
      </div>
      <p className="form-box-footer">
        Don't have an account?{' '}
        <span className="accent-text" onClick={toggle}>
          Sign up!
        </span>
      </p>
    </div>
  );
}

export default LogIn;
