import { FC } from 'react';
import dayjs from 'dayjs';
import { Typography } from '@material-ui/core';

import { Day } from 'constants/interfaces';
import { useAppDispatch } from 'hooks';
import { changeSelectedDay } from 'reducers/scheduleSlice';

import ScheduleMeal from './ScheduleMeal/ScheduleMeal';

import useStyles from './styles';

type Props = {
  day: Day;
};

const ScheduleDay: FC<Props> = ({ day }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const editDay = (): void => {
    dispatch(changeSelectedDay(day));
  };

  const dateDisplay = dayjs(day.day).format('MMMM D');

  return (
    <div className={classes.day} onClick={editDay}>
      <Typography variant="subtitle2" gutterBottom>
        {dateDisplay}
      </Typography>
      {day.meals.map((meal) => (
        <ScheduleMeal key={`${dateDisplay}-${meal.type}`} meal={meal} />
      ))}
    </div>
  );
};

export default ScheduleDay;
