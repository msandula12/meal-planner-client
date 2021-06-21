import { BaseSyntheticEvent, useState } from 'react';

import { MealType } from '../../constants/enums';

type Props = {
  meal: string;
  mealType: MealType;
};

function DayPlannerInput({ meal, mealType }: Props) {
  const [value, setValue] = useState(meal);

  const updateInput = ({ target }: BaseSyntheticEvent) => {
    setValue(target.value);
  };

  return (
    <div key={mealType} className="input-group">
      <label className="input-label" htmlFor={mealType}>
        {mealType}
      </label>
      <input
        className="text-input"
        id={mealType}
        onChange={updateInput}
        placeholder={`What's for ${mealType}?`}
        type="text"
        value={value}
      />
    </div>
  );
}

export default DayPlannerInput;
