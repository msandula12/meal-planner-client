import { Grid, Typography } from '@material-ui/core';

import { MOCK_SCHEDULE } from '../../../mockData/mockData';

const Schedule = () => {
  const currentWeek = MOCK_SCHEDULE.slice(0, 7);
  const nextWeek = MOCK_SCHEDULE.slice(7);

  const editDay = () => {

  };

  return (
    <Grid container alignItems='stretch' justify='center'>
      <Grid container justify='center'>
        {currentWeek.map(day => (
          <Grid key={day.day.toLocaleDateString()} item onClick={editDay}>
            <Typography variant='h2'>M</Typography>
          </Grid>          
        ))}
      </Grid>
      <Grid container justify='center'>
        {nextWeek.map(day => (
          <Grid key={day.day.toLocaleDateString()} item onClick={editDay}>
            <Typography variant='h2'>M</Typography>
          </Grid>          
        ))}
      </Grid>   
    </Grid>
  )
}

export default Schedule
