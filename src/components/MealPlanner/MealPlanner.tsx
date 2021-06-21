import { useEffect, useState } from 'react';

import { Day } from '../../constants/interfaces';
import { getMockSchedule } from '../../mockData/mockData';
import { isToday } from '../../utils/helpers';

import DayPlanner from '../DayPlanner/DayPlanner';
import Header from '../Header/Header';
import Schedule from '../Schedule/Schedule';

import './MealPlanner.scss';

function MealPlanner() {
  const [schedule, setSchedule] = useState<Day[]>([]);
  const [selectedDay, setSelectedDay] = useState<Day | undefined>(undefined);

  useEffect(() => {
    const currentSchedule = getMockSchedule();
    setSchedule(currentSchedule);
    const today = currentSchedule.find((day) => isToday(day.day));
    setSelectedDay(today);
  }, []);

  return (
    <div className="container meal-planner">
      <Header />
      <div className="meal-planner-dashboard">
        <Schedule schedule={schedule} selectedDay={selectedDay} />
        <DayPlanner selectedDay={selectedDay} />
      </div>
    </div>
  );
}

export default MealPlanner;
