import { useEffect, useState } from 'react';
import { BiCaretLeft, BiCaretRight } from 'react-icons/bi';

import { MealType } from '../../constants/enums';
import { Day } from '../../constants/interfaces';
import { formatDate } from '../../utils/helpers';

import DayPlannerInput from './DayPlannerInput';

import './DayPlanner.scss';

type Props = {
  selectedDay: Day | undefined;
  updateSchedule: (day: Day) => void;
};

function DayPlanner({ selectedDay, updateSchedule }: Props) {
  const [breakfast, setBreakfast] = useState('');
  const [lunch, setLunch] = useState('');
  const [dinner, setDinner] = useState('');

  useEffect(() => {
    if (selectedDay) {
      setBreakfast(selectedDay.meals[MealType.BREAKFAST]);
      setLunch(selectedDay.meals[MealType.LUNCH]);
      setDinner(selectedDay.meals[MealType.DINNER]);
    }
  }, [selectedDay]);

  if (!selectedDay) {
    return <section className="container day-planner">No day selected</section>;
  }

  const canSaveMeals = () => {
    if (selectedDay) {
      return (
        selectedDay.meals[MealType.BREAKFAST] !== breakfast ||
        selectedDay.meals[MealType.LUNCH] !== lunch ||
        selectedDay.meals[MealType.DINNER] !== dinner
      );
    }
    return false;
  };

  const saveMeals = () => {
    updateSchedule({
      ...selectedDay,
      meals: {
        [MealType.BREAKFAST]: breakfast,
        [MealType.LUNCH]: lunch,
        [MealType.DINNER]: dinner,
      },
    });
  };

  return (
    <section className="container day-planner">
      <div className="day-planner-header">
        <BiCaretLeft className="icon day-selector-icon" />
        <span className="day-planner-day">{formatDate(selectedDay.day)}</span>
        <BiCaretRight className="icon day-selector-icon" />
      </div>
      <div className="day-planner-meals">
        <DayPlannerInput
          handleUpdate={setBreakfast}
          meal={breakfast}
          mealType={MealType.BREAKFAST}
        />
        <DayPlannerInput
          handleUpdate={setLunch}
          meal={lunch}
          mealType={MealType.LUNCH}
        />
        <DayPlannerInput
          handleUpdate={setDinner}
          meal={dinner}
          mealType={MealType.DINNER}
        />
      </div>
      <button
        disabled={!canSaveMeals()}
        className="btn btn-primary"
        onClick={saveMeals}
      >
        Save
      </button>
    </section>
  );
}

export default DayPlanner;
