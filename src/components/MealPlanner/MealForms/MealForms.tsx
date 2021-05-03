import { FC, Fragment } from 'react';
import moment from 'moment';
import { Divider, Drawer, IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { Day } from 'constants/interfaces';
import { useAppDispatch } from 'hooks';
import { changeSelectedDay } from 'reducers/scheduleSlice';

import MealForm from './MealForm/MealForm';

import useStyles from './styles';

type Props = {
  day: Day;
}

const MealForms: FC<Props> = ({ day }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const closeMealForms = () => {
    dispatch(changeSelectedDay(null));
  }

  return (
    <Drawer anchor='right' variant='persistent' open>
      <div className={classes.drawerHeader}>
        <Typography variant='subtitle1'>
          {moment(day.day).format('dddd, MMMM D')}
        </Typography>
        <IconButton aria-label='Close form' color='secondary' onClick={closeMealForms}>
          <CloseIcon />
        </IconButton>
      </div>
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
