import { FC } from 'react';
import moment from 'moment';
import { Grid, Paper, Typography } from '@material-ui/core';

import MealForm from './MealForm/MealForm';

import { Day } from '../../../constants/interfaces';

type Props = {
  day: Day | null;
}

const MealForms: FC<Props> = ({ day }) => {
  return (
    <Paper variant='outlined'>
      {day ? (
        <>
          <Typography variant='h5' gutterBottom>{moment(day.day).format('dddd, MMMM D')}</Typography>
          <Grid container alignItems='stretch' justify='center' spacing={1}>
            {day.meals.map(meal => (
              <MealForm key={meal.type} meal={meal} /> 
            ))}
          </Grid>
        </>
      ) : (
        <Typography variant='h5'>Select a day to edit</Typography>
      )}
    </Paper>
  )
}

export default MealForms
