import { BiCaretLeft, BiCaretRight } from 'react-icons/bi';

import { MealType } from '../../constants/enums';
import { Day } from '../../constants/interfaces';
import { formatDate } from '../../utils/helpers';

import DayPlannerInput from './DayPlannerInput';

import './DayPlanner.scss';

type Props = {
  selectedDay: Day | undefined;
};

function DayPlanner({ selectedDay }: Props) {
  if (!selectedDay) {
    return <section className="container day-planner">No day selected</section>;
  }

  return (
    <section className="container day-planner">
      <div className="day-planner-header">
        <BiCaretLeft className="icon day-selector-icon" />
        <span className="day-planner-day">{formatDate(selectedDay.day)}</span>
        <BiCaretRight className="icon day-selector-icon" />
      </div>
      <div className="day-planner-meals">
        <DayPlannerInput
          meal={selectedDay.meals[MealType.BREAKFAST]}
          mealType={MealType.BREAKFAST}
        />
        <DayPlannerInput
          meal={selectedDay.meals[MealType.LUNCH]}
          mealType={MealType.LUNCH}
        />
        <DayPlannerInput
          meal={selectedDay.meals[MealType.DINNER]}
          mealType={MealType.DINNER}
        />
      </div>
      <button className="btn btn-primary">Save</button>
    </section>
  );
}

export default DayPlanner;
