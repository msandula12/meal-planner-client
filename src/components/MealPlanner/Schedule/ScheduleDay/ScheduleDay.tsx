import { FC } from 'react';
import moment from 'moment';
import { Typography } from '@material-ui/core';

import { Day } from '../../../../constants/interfaces';

import ScheduleMeal from './ScheduleMeal/ScheduleMeal';

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
        <ScheduleMeal key={`${dateDisplay}-${meal.type}`} meal={meal} />
      ))}
    </div>
  )
}

export default ScheduleDay
