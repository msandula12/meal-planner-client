import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Day } from 'constants/interfaces';
import { getMockSchedule } from 'mockData/mockData';
import {
  changeSchedule,
  changeSelectedDay,
  selectSchedule,
  selectSelectedDay,
} from 'redux/reducers/scheduleSlice';
import { isToday } from 'utils/helpers';

import DayPlanner from '../DayPlanner/DayPlanner';
import Header from '../Header/Header';
import Schedule from '../Schedule/Schedule';

import './MealPlanner.scss';

function MealPlanner() {
  const dispatch = useDispatch();

  // Load schedule and set "today" as selected day
  useEffect(() => {
    const schedule = getMockSchedule();
    const today = schedule.find((day) => isToday(day.day));
    dispatch(changeSchedule(schedule));
    dispatch(changeSelectedDay(today));
  }, [dispatch]);

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
      <main className="container meal-planner hoist">
        <Header />
        <section className="meal-planner-dashboard">
          <Schedule
            schedule={schedule}
            selectedDay={selectedDay}
            setSelectedDay={handleSelectedDay}
          />
          <DayPlanner
            selectedDay={selectedDay}
            updateSchedule={handleUpdateSchedule}
          />
        </section>
      </main>
    </div>
  );
}

export default MealPlanner;
