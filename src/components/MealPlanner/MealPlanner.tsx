import { Container, Typography } from '@material-ui/core';

import MealForms from './MealForms/MealForms';
import Schedule from './Schedule/Schedule';

import { MealType } from '../../constants/enums';
import { Day } from '../../constants/interfaces';

import useStyles from './styles';

const MOCK_DAY: Day = {
  day: new Date(),
  meals: [
    {
      name: 'Mixed Berry Smoothie',
      schedule: [],
      starting: new Date(),
      type: MealType.BREAKFAST,
    },
    {
      name: 'Grilled Chicken Salad',
      schedule: [],
      starting: new Date(),
      type: MealType.LUNCH,
    },
    {
      name: 'Baked Cod with Veggies',
      schedule: [],
      starting: new Date(),
      type: MealType.DINNER,
    },
  ]
}

const MealPlanner = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant='h6'>
        Plan your meals for the next two weeks
      </Typography>
      <Schedule />
      <MealForms day={MOCK_DAY}/>
    </Container>
  )
}

export default MealPlanner
