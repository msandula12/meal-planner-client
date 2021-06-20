import './MealPlanner.scss';

import DayPlanner from '../DayPlanner/DayPlanner';
import Schedule from '../Schedule/Schedule';

function MealPlanner() {
  return (
    <div className="container dashboard">
      <header>
        <nav className="nav">
          <span className="logo">MealPlanner</span>
          <span>
            Welcome, Mike!
            <i className="icon fa fa-cog"></i>
            <i className="icon fa fa-sign-out"></i>
          </span>
        </nav>
      </header>
      <div className="main">
        <Schedule />
        <DayPlanner />
      </div>
    </div>
  );
}

export default MealPlanner;
