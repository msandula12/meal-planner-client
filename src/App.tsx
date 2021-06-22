import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getMockSchedule } from 'mockData/mockData';
import {
  changeSchedule,
  changeSelectedDay,
} from 'redux/reducers/scheduleSlice';
import { isToday } from 'utils/helpers';

import MealPlanner from 'components/MealPlanner/MealPlanner';

function App() {
  const dispatch = useDispatch();

  // Load schedule and set "today" as selected day
  useEffect(() => {
    const schedule = getMockSchedule();
    const today = schedule.find((day) => isToday(day.day));
    dispatch(changeSchedule(schedule));
    dispatch(changeSelectedDay(today));
  }, [dispatch]);

  return <MealPlanner />;
}

export default App;
