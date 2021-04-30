import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

import useStyles from './styles';

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography className={classes.title} variant='h6'>MealPlanner</Typography>
        <Button color='inherit'>Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
