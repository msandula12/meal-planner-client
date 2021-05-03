import { FC, Fragment } from 'react';
import moment from 'moment';
import { Divider, Drawer, Typography } from '@material-ui/core';

import MealForm from './MealForm/MealForm';

import { Day } from '../../../constants/interfaces';

type Props = {
  day: Day;
}

const MealForms: FC<Props> = ({ day }) => {
  return (
    <Drawer anchor='right' variant='persistent' open>
      <Typography variant='subtitle1' gutterBottom>
        {moment(day.day).format('dddd, MMMM D')}
      </Typography>
      {day.meals.map((meal, index) => (
        <Fragment key={meal.type}>
          <MealForm meal={meal} /> 
          {(index < day.meals.length - 1) && <Divider />}
        </Fragment>
      ))}
    </Drawer>
  )
}

export default MealForms
