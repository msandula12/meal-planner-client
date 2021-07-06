import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

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
import Loading from '../Loading/Loading';
import Schedule from '../Schedule/Schedule';

import './MealPlanner.scss';

function MealPlanner() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const user = useSelector(selectCurrentUser);

  const [isLoading, setIsLoading] = useState(false);

  const isViewingDemo = location.pathname === Routes.DEMO;

  // Load schedule and set "today" as selected day
  useEffect(() => {
    setIsLoading(true);
    if (!isViewingDemo && user) {
      getSchedule(user).then((res) => {
        const schedule: Day[] = fillEmptyDays(res.data.result);
        const today = schedule.find((day) => isToday(day.day));
        dispatch(changeSchedule(schedule));
        dispatch(changeSelectedDay(today));
        setIsLoading(false);
      });
    } else {
      // If no user, return mock schedule
      const schedule = getMockSchedule();
      const today = schedule.find((day) => isToday(day.day));
      dispatch(changeSchedule(schedule));
      dispatch(changeSelectedDay(today));
      setIsLoading(false);
    }
  }, [dispatch, isViewingDemo, user]);

  const schedule = useSelector(selectSchedule);
  const selectedDay = useSelector(selectSelectedDay);

  const goToLogIn = () => {
    history.push(Routes.HOME);
  };

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
      {isLoading && <Loading fullscreen />}
      <main className="container meal-planner hoist">
        <Header goToLogIn={goToLogIn} />
        {isViewingDemo && (
          <p className="placeholder demo-text">
            You are viewing a read-only demo.
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
