import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiCaretLeft, BiCaretRight } from 'react-icons/bi';
import classNames from 'classnames';

import { MealType } from 'constants/enums';
import { Day } from 'constants/interfaces';
import {
  canSelectNextDay,
  canSelectPrevDay,
  changeSelectedDay,
  selectSchedule,
} from 'redux/reducers/scheduleSlice';
import { formatDate } from 'utils/helpers';

import DayPlannerInput from './DayPlannerInput';

import './DayPlanner.scss';

type Props = {
  selectedDay: Day | undefined;
  updateSchedule: (day: Day) => void;
};

function DayPlanner({ selectedDay, updateSchedule }: Props) {
  const dispatch = useDispatch();

  const schedule = useSelector(selectSchedule);
  const disablePrev = !useSelector(canSelectPrevDay);
  const disableNext = !useSelector(canSelectNextDay);

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

  const canSaveMeals = useMemo(() => {
    if (!selectedDay) {
      return false;
    }
    return (
      selectedDay.meals[MealType.BREAKFAST] !== breakfast ||
      selectedDay.meals[MealType.LUNCH] !== lunch ||
      selectedDay.meals[MealType.DINNER] !== dinner
    );
  }, [breakfast, lunch, dinner, selectedDay]);

  if (!selectedDay) {
    return <section className="container day-planner">No day selected</section>;
  }

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

  const getPrevDay = () => {
    const indexOfSelectedDay = schedule.indexOf(selectedDay);
    const prevDay = schedule[indexOfSelectedDay - 1];
    dispatch(changeSelectedDay(prevDay));
  };

  const getNextDay = () => {
    const indexOfSelectedDay = schedule.indexOf(selectedDay);
    const nextDay = schedule[indexOfSelectedDay + 1];
    dispatch(changeSelectedDay(nextDay));
  };

  const leftCls = classNames('icon', 'day-selector-icon', {
    disabled: disablePrev,
  });

  const rightCls = classNames('icon', 'day-selector-icon', {
    disabled: disableNext,
  });

  return (
    <section className="container day-planner">
      <div className="day-planner-header">
        <BiCaretLeft className={leftCls} onClick={getPrevDay} />
        <span className="day-planner-day">{formatDate(selectedDay.day)}</span>
        <BiCaretRight className={rightCls} onClick={getNextDay} />
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
        disabled={!canSaveMeals}
        className="btn btn-primary"
        onClick={saveMeals}
      >
        Save
      </button>
    </section>
  );
}

export default DayPlanner;
