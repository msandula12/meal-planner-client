import { MealType } from '../../constants/enums';

import './ScheduleMeal.scss';

type Props = {
  meal: string;
  mealType: MealType;
};

function ScheduleMeal({ meal, mealType }: Props) {
  const updateInput = () => {};

  return (
    <textarea
      className={`schedule-meal ${meal.length > 0 ? mealType : 'placeholder'}`}
      key={mealType}
      onChange={updateInput}
      placeholder="n/a"
      readOnly
      title={meal}
      value={meal}
    />
  );
}

export default ScheduleMeal;
