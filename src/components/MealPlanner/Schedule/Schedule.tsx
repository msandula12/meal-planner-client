import { FC } from 'react';
import moment from 'moment';
import { Card, Typography } from '@material-ui/core';

import { MOCK_SCHEDULE } from 'mockData/mockData';

import ScheduleDay from './ScheduleDay/ScheduleDay';

import useStyles from './styles';

// 0 means week starts on Sunday
// 1 means week starts on Monday
const START_OF_WEEK = 1;

const DAYS_OF_WEEK = Array.from({ length: 7 }).map((_, index) => {
  return moment().startOf('week').add(index + START_OF_WEEK, 'days').format('dddd');
});

type Props = {}

const Schedule: FC<Props> = () => {
  const classes = useStyles();

  return (
    <Card raised className={classes.root} >
      <Typography variant='h6' gutterBottom>
        Your meals for the next two weeks:
      </Typography>
      <div className={classes.schedule}>
        {DAYS_OF_WEEK.map(dayOfWeek => (
          <Typography key={dayOfWeek} className={classes.dayOfWeek} variant='overline'>
            {dayOfWeek}
          </Typography>
        ))}
        {MOCK_SCHEDULE.map(day => (
          <ScheduleDay key={moment(day.day).format('MM-DD-YYYY')} day={day} />         
        ))}
      </div>
    </Card>
  )
}

export default Schedule
