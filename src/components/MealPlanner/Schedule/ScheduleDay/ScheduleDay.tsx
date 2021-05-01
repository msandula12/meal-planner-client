import { FC } from 'react';
import moment from 'moment';
import { Typography } from '@material-ui/core';

import { Day } from '../../../../constants/interfaces';

import useStyles from './styles';

type Props = {
  day: Day;
  setSelectedDay: (day: Day) => void;
}

const ScheduleDay: FC<Props> = ({ day, setSelectedDay }) => {
  const classes = useStyles();

  const editDay = (): void => {
    setSelectedDay(day);
  };

  const dateDisplay = moment(day.day).format('MMM D');

  return (
    <div className={classes.day} onClick={editDay}>
      <Typography variant='subtitle2' gutterBottom>{dateDisplay}</Typography>
      {day.meals.map(meal => (
        <div key={`${dateDisplay}-${meal.type}`} className={classes.meal}>
          <Typography variant='body2' gutterBottom>{meal.name}</Typography>
        </div>
      ))}
    </div>
  )
}

export default ScheduleDay
