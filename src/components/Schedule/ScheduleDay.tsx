import dayjs from 'dayjs';

import { Day } from '../../constants/interfaces';

import './ScheduleDay.scss';

type Props = {
  day: Day;
};

function ScheduleDay({ day }: Props) {
  const isToday = dayjs().isSame(day.day, 'day');

  const updateInput = () => {};

  return (
    <div className="calendar-day">
      <p className="calendar-day-date">
        {isToday ? 'Today' : dayjs(day.day).format('MMM DD')}
      </p>
      <div className="calendar-meals">
        {day.meals.map((meal) => (
          <textarea
            className={`meal ${
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
