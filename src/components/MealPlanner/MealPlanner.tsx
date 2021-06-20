import './MealPlanner.scss';

import DayPlanner from '../DayPlanner/DayPlanner';
import Header from '../Header/Header';
import Schedule from '../Schedule/Schedule';

function MealPlanner() {
  return (
    <div className="container meal-planner">
      <Header />
      <div className="meal-planner-dashboard">
        <Schedule />
        <DayPlanner />
      </div>
    </div>
  );
}

export default MealPlanner;
