import { Day } from '../../constants/interfaces';
import { formatDate } from '../../utils/helpers';

import './ScheduleDay.scss';

type Props = {
  day: Day;
  isSelected: boolean;
  setSelectedDay: (day: Day) => void;
};

function ScheduleDay({ day, isSelected, setSelectedDay }: Props) {
  const formattedDate = formatDate(day.day);

  const handleSelectDay = () => {
    if (!isSelected) {
      setSelectedDay(day);
    }
  };

  const updateInput = () => {};

  return (
    <div
      onClick={handleSelectDay}
      className={`schedule-day ${isSelected ? 'selected' : ''}`}
    >
      <p
        className={`schedule-day-date ${
          formattedDate === 'Today' ? 'is-today' : ''
        }`}
      >
        {formattedDate}
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
