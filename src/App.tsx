import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MealPlanner from 'components/MealPlanner/MealPlanner';
import NavBar from 'components/NavBar/NavBar';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <NavBar />
        <Switch>
          <Route path='/' exact component={MealPlanner} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
