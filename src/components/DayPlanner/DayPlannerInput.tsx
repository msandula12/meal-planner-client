import { BaseSyntheticEvent, useEffect, useState } from 'react';

import { MealType } from 'constants/enums';

const MAX_CHARACTERS = 40;

type Props = {
  handleUpdate: (value: string) => void;
  meal: string;
  mealType: MealType;
};

function DayPlannerInput({ handleUpdate, meal, mealType }: Props) {
  const [error, setError] = useState('');

  useEffect(() => {
    if (meal.length >= MAX_CHARACTERS) {
      setError(`${MAX_CHARACTERS} character limit reached.`);
    } else {
      if (error) {
        setError('');
      }
    }
  }, [error, meal]);

  const selectText = ({ target }: BaseSyntheticEvent) => {
    target.select();
  };

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
        maxLength={MAX_CHARACTERS}
        onChange={updateInput}
        onFocus={selectText}
        placeholder={`What's for ${mealType}?`}
        type="text"
        value={meal}
      />
      {error && <div className="error-msg">{error}</div>}
    </div>
  );
}

export default DayPlannerInput;
