import { getMockSchedule } from '../../mockData/mockData';

import DayPlanner from '../DayPlanner/DayPlanner';
import Header from '../Header/Header';
import Schedule from '../Schedule/Schedule';

import './MealPlanner.scss';

function MealPlanner() {
  const schedule = getMockSchedule();

  return (
    <div className="container meal-planner">
      <Header />
      <div className="meal-planner-dashboard">
        <Schedule schedule={schedule} />
        <DayPlanner />
      </div>
    </div>
  );
}

export default MealPlanner;
