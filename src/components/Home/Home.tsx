import { Link } from 'react-router-dom';

import { Routes } from 'constants/enums';

function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <p>
        Go to the <Link to={Routes.SCHEDULE}>schedule</Link>
      </p>
    </div>
  );
}

export default Home;
