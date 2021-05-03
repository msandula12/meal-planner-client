import { FC } from 'react';
import { TextField, Typography } from '@material-ui/core';

import { Meal } from '../../../../constants/interfaces';

import useStyles from './styles';

type Props = {
  meal: Meal;
}

const MealForm: FC<Props> = ({ meal }) => {
  const classes = useStyles();

  return (
    <div className={classes.mealForm}>
      <Typography variant='overline' gutterBottom>
        {meal.type.toUpperCase()}
      </Typography>
      <TextField 
        fullWidth 
        label='Meal' 
        margin='dense' 
        value={meal.name} 
        variant='outlined' 
      />
    </div>
  )
}

export default MealForm;