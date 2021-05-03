import { Container } from '@material-ui/core';

import { useAppSelector } from 'hooks';
import { selectSelectedDay } from 'reducers/scheduleSlice';

import MealForms from './MealForms/MealForms';
import Schedule from './Schedule/Schedule';

import useStyles from './styles';

const MealPlanner = () => {
  const classes = useStyles();
  const selectedDay = useAppSelector(selectSelectedDay);

  return (
    <Container className={classes.root}>
      <Schedule />
      {selectedDay && <MealForms day={selectedDay}/>}
    </Container>
  )
}

export default MealPlanner
