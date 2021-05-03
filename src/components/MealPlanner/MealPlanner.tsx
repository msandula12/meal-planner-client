import { useState } from 'react';
import { Container } from '@material-ui/core';

import MealForms from './MealForms/MealForms';
import Schedule from './Schedule/Schedule';

import { Day } from '../../constants/interfaces';

import useStyles from './styles';

const MealPlanner = () => {
  const classes = useStyles();
  const [selectedDay, setSelectedDay] = useState<Day | null>(null);

  return (
    <Container className={classes.root}>
      <Schedule setSelectedDay={setSelectedDay} />
      {selectedDay && <MealForms day={selectedDay}/>}
    </Container>
  )
}

export default MealPlanner
