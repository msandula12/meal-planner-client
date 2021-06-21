import { MealType } from '../../constants/enums';
import { Day } from '../../constants/interfaces';
import { formatDate } from '../../utils/helpers';

import ScheduleMeal from './ScheduleMeal';

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
        <ScheduleMeal
          meal={day.meals[MealType.BREAKFAST]}
          mealType={MealType.BREAKFAST}
        />
        <ScheduleMeal
          meal={day.meals[MealType.LUNCH]}
          mealType={MealType.LUNCH}
        />
        <ScheduleMeal
          meal={day.meals[MealType.DINNER]}
          mealType={MealType.DINNER}
        />
      </div>
    </div>
  );
}

export default ScheduleDay;
