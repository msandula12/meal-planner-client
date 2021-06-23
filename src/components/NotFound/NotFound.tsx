import { Link } from 'react-router-dom';

import { Routes } from 'constants/enums';

import './NotFound.scss';

function NotFound() {
  return (
    <div className="not-found">
      <h1>Oops!</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to={Routes.HOME}>
        <button className="btn btn-primary">Return Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
