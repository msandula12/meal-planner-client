import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Routes } from 'constants/enums';

import Home from 'components/Home/Home';
import MealPlanner from 'components/MealPlanner/MealPlanner';
import NotFound from 'components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={Routes.HOME} component={Home} />
        <Route path={Routes.SCHEDULE} component={MealPlanner} />
        <Route path={Routes.NOT_FOUND} component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
