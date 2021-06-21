import { BaseSyntheticEvent } from 'react';

import { MealType } from '../../constants/enums';

type Props = {
  handleUpdate: (value: string) => void;
  meal: string;
  mealType: MealType;
};

function DayPlannerInput({ handleUpdate, meal, mealType }: Props) {
  const updateInput = ({ target }: BaseSyntheticEvent) => {
    handleUpdate(target.value);
  };

  return (
    <div className="input-group">
      <label className="input-label" htmlFor={mealType}>
        {mealType}
      </label>
      <input
        className="text-input"
        id={mealType}
        onChange={updateInput}
        placeholder={`What's for ${mealType}?`}
        type="text"
        value={meal}
      />
    </div>
  );
}

export default DayPlannerInput;
