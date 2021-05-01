import { FC } from 'react';
import moment from 'moment';
import { Card, Typography } from '@material-ui/core';

import { Day } from '../../../constants/interfaces';
import { MOCK_SCHEDULE } from '../../../mockData/mockData';

import ScheduleDay from './ScheduleDay/ScheduleDay';

import useStyles from './styles';

type Props = {
  setSelectedDay: (day: Day) => void;
}

const Schedule: FC<Props> = ({ setSelectedDay }) => {
  const classes = useStyles();

  return (
    <Card raised className={classes.root} >
      <Typography variant='h6' gutterBottom>
        Plan your meals for the next two weeks
      </Typography>
      <div className={classes.schedule}>
        {MOCK_SCHEDULE.map(day => (
          <ScheduleDay key={moment(day.day).format('MM-DD-YYYY')} day={day} setSelectedDay={setSelectedDay} />         
        ))}
      </div>
    </Card>
  )
}

export default Schedule
