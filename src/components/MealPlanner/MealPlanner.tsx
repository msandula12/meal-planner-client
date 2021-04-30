import { Container, Typography } from '@material-ui/core';

import useStyles from './styles';

const MealPlanner = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant='h6'>
        Plan your meals for the next two weeks
      </Typography>
      {/* TODO - Schedule */}
      {/* TODO - MealForms  */}
    </Container>
  )
}

export default MealPlanner
