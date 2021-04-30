import { FC } from 'react';
import { Grid } from '@material-ui/core';

import MealForm from './MealForm/MealForm';

import { Day } from '../../../constants/interfaces';

type Props = {
  day: Day;
}

const MealForms: FC<Props> = ({ day }) => {
  return (
    <Grid container spacing={2}>
      {day.meals.map(meal => (
        <MealForm key={meal.type} meal={meal} /> 
      ))}  
    </Grid>
  )
}

export default MealForms
