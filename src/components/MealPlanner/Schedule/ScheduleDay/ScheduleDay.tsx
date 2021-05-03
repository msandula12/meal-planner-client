import { FC } from 'react';
import moment from 'moment';
import { Typography } from '@material-ui/core';

import ScheduleMeal from './ScheduleMeal/ScheduleMeal';

import { Day } from '../../../../constants/interfaces';
import { useAppDispatch } from '../../../../hooks';
import { changeSelectedDay } from '../../../../reducers/scheduleSlice';


import useStyles from './styles';

type Props = {
  day: Day;
}

const ScheduleDay: FC<Props> = ({ day }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const editDay = (): void => {
    dispatch(changeSelectedDay(day));
  };

  const dateDisplay = moment(day.day).format('MMM D');

  return (
    <div className={classes.day} onClick={editDay}>
      <Typography variant='subtitle2' gutterBottom>{dateDisplay}</Typography>
      {day.meals.map(meal => (
        <ScheduleMeal key={`${dateDisplay}-${meal.type}`} meal={meal} />
      ))}
    </div>
  )
}

export default ScheduleDay
