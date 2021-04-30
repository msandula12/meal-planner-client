import { Container, Typography } from '@material-ui/core';

import MealForms from './MealForms/MealForms';
import Schedule from './Schedule/Schedule';

import { MOCK_DAY } from '../../mockData/mockData';

import useStyles from './styles';

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
