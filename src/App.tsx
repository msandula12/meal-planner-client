import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Auth from 'components/Auth/Auth';
import MealPlanner from 'components/MealPlanner/MealPlanner';
import NavBar from 'components/NavBar/NavBar';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <NavBar />
        <div className={classes.page}>
          <Switch>
            <Route path='/' exact component={MealPlanner} />
            <Route path='/auth' exact component={Auth} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
