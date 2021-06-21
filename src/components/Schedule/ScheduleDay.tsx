import { BiRestaurant } from 'react-icons/bi';

import { Day } from '../../constants/interfaces';
import { formatDate } from '../../utils/helpers';

import './ScheduleDay.scss';

type Props = {
  day: Day;
  isSelected: boolean;
};

function ScheduleDay({ day, isSelected }: Props) {
  const formattedDate = formatDate(day.day);

  const updateInput = () => {};

  return (
    <div className={`schedule-day ${isSelected ? 'selected' : ''}`}>
      <p className="schedule-day-date">
        {formattedDate === 'Today' ? (
          <span className="is-today">
            <BiRestaurant />
            <span>{formattedDate}</span>
            <BiRestaurant />
          </span>
        ) : (
          formattedDate
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
