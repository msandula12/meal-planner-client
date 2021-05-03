import { FC } from 'react';
import { Typography } from '@material-ui/core';

import { Meal } from 'constants/interfaces';

import useStyles from './styles';

type Props = {
  meal: Meal;
}

const ScheduleMeal: FC<Props> = ({ meal }) => {
  const classes = useStyles({ mealType: meal.type });
  return (
    <div className={classes.meal}>
      <Typography variant='body2' gutterBottom>{meal.name}</Typography>
    </div>
  )
}

export default ScheduleMeal
