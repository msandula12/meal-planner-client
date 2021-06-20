import dayjs from 'dayjs';
import { BiRestaurant } from 'react-icons/bi';

import { Day } from '../../constants/interfaces';

import './ScheduleDay.scss';

type Props = {
  day: Day;
};

function ScheduleDay({ day }: Props) {
  const isToday = dayjs().isSame(day.day, 'day');

  const updateInput = () => {};

  return (
    <div className="schedule-day">
      <p className="schedule-day-date">
        {isToday ? (
          <span className="is-today">
            <BiRestaurant />
            <span>Today</span>
            <BiRestaurant />
          </span>
        ) : (
          dayjs(day.day).format('MMM DD')
        )}
      </p>
      <div className="schedule-day-meals">
        {day.meals.map((meal) => (
          <textarea
            className={`schedule-day-meal ${
              meal.name.length > 0 ? meal.type : 'placeholder'
            }`}
            key={meal.type}
            onChange={updateInput}
            placeholder="n/a"
            readOnly
            title={meal.name}
            value={meal.name}
          />
        ))}
      </div>
    </div>
  );
}

export default ScheduleDay;
