import { BaseSyntheticEvent, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiCaretLeft, BiCaretRight } from 'react-icons/bi';
import classNames from 'classnames';

import { updateDay } from 'api/schedule';
import { MealType } from 'constants/enums';
import { Day } from 'constants/interfaces';
import {
  canSelectNextDay,
  canSelectPrevDay,
  changeSelectedDay,
  selectSchedule,
} from 'redux/reducers/scheduleSlice';
import { selectCurrentUser } from 'redux/reducers/userSlice';
import { formatDate } from 'utils/helpers';

import DayPlannerInput from './DayPlannerInput';
import LoadingWrapper from '../Loading/LoadingWrapper';

import './DayPlanner.scss';

type Props = {
  isViewingDemo: boolean;
  selectedDay: Day | undefined;
  updateSchedule: (day: Day) => void;
};

function DayPlanner({ isViewingDemo, selectedDay, updateSchedule }: Props) {
  const dispatch = useDispatch();

  const schedule = useSelector(selectSchedule);
  const user = useSelector(selectCurrentUser);
  const disablePrev = !useSelector(canSelectPrevDay);
  const disableNext = !useSelector(canSelectNextDay);

  const [isLoading, setIsLoading] = useState(false);
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
    if (isViewingDemo || !selectedDay) {
      return false;
    }
    return (
      selectedDay.meals[MealType.BREAKFAST] !== breakfast ||
      selectedDay.meals[MealType.LUNCH] !== lunch ||
      selectedDay.meals[MealType.DINNER] !== dinner
    );
  }, [breakfast, lunch, dinner, isViewingDemo, selectedDay]);

  if (!selectedDay) {
    return <section className="container day-planner">No day selected</section>;
  }

  const saveMeals = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    if (!user) {
      return;
    }
    setIsLoading(true);
    const updatedDay = {
      ...selectedDay,
      meals: {
        [MealType.BREAKFAST]: breakfast,
        [MealType.LUNCH]: lunch,
        [MealType.DINNER]: dinner,
      },
    };
    updateDay(user, updatedDay)
      .then((res) => {
        const newDay: Day = res.data.day;
        updateSchedule(newDay);
        dispatch(changeSelectedDay(newDay));
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
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
    <form className="container form-box day-planner" onSubmit={saveMeals}>
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
      <LoadingWrapper isLoading={isLoading}>
        <input
          className="btn btn-primary fluid"
          disabled={!canSaveMeals}
          onClick={saveMeals}
          type="submit"
          value={isLoading ? ' ' : 'Save'}
        />
      </LoadingWrapper>
    </form>
  );
}

export default DayPlanner;
