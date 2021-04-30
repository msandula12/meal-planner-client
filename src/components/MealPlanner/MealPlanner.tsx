import { useState } from 'react';
import { Container, Typography } from '@material-ui/core';

import MealForms from './MealForms/MealForms';
import Schedule from './Schedule/Schedule';

import { Day } from '../../constants/interfaces';

import useStyles from './styles';

const MealPlanner = () => {
  const classes = useStyles();
  const [selectedDay, setSelectedDay] = useState<Day | null>(null);

  return (
    <Container className={classes.root}>
      <Typography variant='h6'>
        Plan your meals for the next two weeks
      </Typography>
      <Schedule setSelectedDay={setSelectedDay} />
      <MealForms day={selectedDay}/>
    </Container>
  )
}

export default MealPlanner
