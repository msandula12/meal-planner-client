import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getSchedule } from 'api/schedule';
import { Routes } from 'constants/enums';
import { Day } from 'constants/interfaces';
import { getMockSchedule } from 'mockData/mockData';
import {
  changeSchedule,
  changeSelectedDay,
  selectSchedule,
  selectSelectedDay,
} from 'redux/reducers/scheduleSlice';
import { selectCurrentUser } from 'redux/reducers/userSlice';
import { fillEmptyDays, isToday } from 'utils/helpers';

import DayPlanner from '../DayPlanner/DayPlanner';
import Header from '../Header/Header';
import Schedule from '../Schedule/Schedule';

import './MealPlanner.scss';

function MealPlanner() {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector(selectCurrentUser);

  const isViewingDemo = location.pathname === Routes.DEMO;

  // Load schedule and set "today" as selected day
  useEffect(() => {
    if (!isViewingDemo && user) {
      getSchedule(user).then((res) => {
        const schedule: Day[] = fillEmptyDays(res.data.result);
        const today = schedule.find((day) => isToday(day.day));
        dispatch(changeSchedule(schedule));
        dispatch(changeSelectedDay(today));
      });
    } else {
      // If no user, return mock schedule
      const schedule = getMockSchedule();
      const today = schedule.find((day) => isToday(day.day));
      dispatch(changeSchedule(schedule));
      dispatch(changeSelectedDay(today));
    }
  }, [dispatch, isViewingDemo, user]);

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
        {isViewingDemo && (
          <p className="placeholder demo-text">
            You are a viewing a readonly demo.
          </p>
        )}
        <section className="meal-planner-dashboard">
          <Schedule
            schedule={schedule}
            selectedDay={selectedDay}
            setSelectedDay={handleSelectedDay}
          />
          <DayPlanner
            isViewingDemo={isViewingDemo}
            selectedDay={selectedDay}
            updateSchedule={handleUpdateSchedule}
          />
        </section>
      </main>
    </div>
  );
}

export default MealPlanner;
