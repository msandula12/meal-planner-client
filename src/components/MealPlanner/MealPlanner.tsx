import './MealPlanner.scss';

import DayPlanner from '../DayPlanner/DayPlanner';
import Header from '../Header/Header';
import Schedule from '../Schedule/Schedule';

function MealPlanner() {
  return (
    <div className="container dashboard">
      <Header />
      <div className="main">
        <Schedule />
        <DayPlanner />
      </div>
    </div>
  );
}

export default MealPlanner;
