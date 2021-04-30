import { FC } from 'react';
import moment from 'moment';
import { Grid, Typography } from '@material-ui/core';

import { Day } from '../../../constants/interfaces';
import { MOCK_SCHEDULE } from '../../../mockData/mockData';

type Props = {
  setSelectedDay: (day: Day) => void;
}

const Schedule: FC<Props> = ({ setSelectedDay }) => {
  const currentWeek = MOCK_SCHEDULE.slice(0, 7);
  const nextWeek = MOCK_SCHEDULE.slice(7);

  const editDay = (day: Day): void => {
    setSelectedDay(day);
  };

  return (
    <Grid container alignItems='stretch' justify='center'>
      <Grid container justify='center'>
        {currentWeek.map(day => (
          <Grid key={day.day.toLocaleDateString()} item onClick={() => editDay(day)}>
            <Typography variant='h2'>{moment(day.day).format('dd')[0]}</Typography>
          </Grid>          
        ))}
      </Grid>
      <Grid container justify='center'>
        {nextWeek.map(day => (
          <Grid key={day.day.toLocaleDateString()} item onClick={() => editDay(day)}>
            <Typography variant='h2'>{moment(day.day).format('dd')[0]}</Typography>
          </Grid>          
        ))}
      </Grid>   
    </Grid>
  )
}

export default Schedule
