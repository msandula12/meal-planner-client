import { useDispatch, useSelector } from 'react-redux';

import { Day } from 'constants/interfaces';
import {
  changeSchedule,
  changeSelectedDay,
  selectSchedule,
  selectSelectedDay,
} from 'redux/reducers/scheduleSlice';

import DayPlanner from '../DayPlanner/DayPlanner';
import Header from '../Header/Header';
import Schedule from '../Schedule/Schedule';

import './MealPlanner.scss';

function MealPlanner() {
  const dispatch = useDispatch();

  const schedule = useSelector(selectSchedule);
  const selectedDay = useSelector(selectSelectedDay);

  const handleSelectedDay = (day: Day) => {
    dispatch(changeSelectedDay(day));
  };

  const handleUpdateSchedule = (updatedDay: Day) => {
    const newSchedule = schedule.map((day) =>
      day.day === updatedDay.day ? updatedDay : day
    );
    dispatch(changeSchedule(newSchedule));
    dispatch(changeSelectedDay(updatedDay));
  };

  return (
    <div className="meal-planner-wrapper">
      <div className="container meal-planner hoist">
        <Header />
        <div className="meal-planner-dashboard">
          <Schedule
            schedule={schedule}
            selectedDay={selectedDay}
            setSelectedDay={handleSelectedDay}
          />
          <DayPlanner
            selectedDay={selectedDay}
            updateSchedule={handleUpdateSchedule}
          />
        </div>
      </div>
    </div>
  );
}

export default MealPlanner;
