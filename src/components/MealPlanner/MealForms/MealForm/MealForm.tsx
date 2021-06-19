import { FC, BaseSyntheticEvent, useState } from 'react';
import { TextField, Typography } from '@material-ui/core';

import { Meal } from 'constants/interfaces';

import useStyles from './styles';

type Props = {
  meal: Meal;
};

const MealForm: FC<Props> = ({ meal }) => {
  const [currentMeal, setCurrentMeal] = useState(meal.name);
  const classes = useStyles();

  const updateCurrentMeal = ({ target }: BaseSyntheticEvent) => {
    setCurrentMeal(target.value);
  };

  return (
    <div className={classes.mealForm}>
      <Typography variant="overline" gutterBottom>
        {meal.type.toUpperCase()}
      </Typography>
      <TextField
        fullWidth
        label="Meal"
        margin="dense"
        onChange={updateCurrentMeal}
        value={currentMeal}
        variant="outlined"
      />
    </div>
  );
};

export default MealForm;
