import MealPlanner from './components/MealPlanner/MealPlanner';
import NavBar from './components/NavBar/NavBar';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <MealPlanner />
    </div>
  )
}

export default App
