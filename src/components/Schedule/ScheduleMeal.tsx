import classNames from 'classnames';

import { MealType } from '../../constants/enums';

import './ScheduleMeal.scss';

type Props = {
  meal: string;
  mealType: MealType;
};

function ScheduleMeal({ meal, mealType }: Props) {
  const updateInput = () => {};

  const cls = classNames('schedule-meal', {
    [mealType]: meal.length > 0,
    placeholder: !meal.length,
  });

  return (
    <textarea
      className={cls}
      onChange={updateInput}
      placeholder="n/a"
      readOnly
      title={meal}
      value={meal}
    />
  );
}

export default ScheduleMeal;
