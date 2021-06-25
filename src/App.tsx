import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';

import { getUserFromToken, getUserToken, isValidToken } from 'api/users';
import { Routes } from 'constants/enums';
import { changeUser } from 'redux/reducers/userSlice';

import Home from 'components/Home/Home';
import MealPlanner from 'components/MealPlanner/MealPlanner';
import NotFound from 'components/NotFound/NotFound';
import ProtectedRoute from 'components/ProtectedRoute/ProtectedRoute';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const token = getUserToken();
    const hasValidToken = isValidToken(token);
    if (hasValidToken) {
      const user = getUserFromToken(token);
      dispatch(changeUser(user));
      history.push(Routes.SCHEDULE);
    }
  }, [dispatch, history]);

  return (
    <>
      <Switch>
        <Route exact path={Routes.HOME} component={Home} />
        <ProtectedRoute path={Routes.SCHEDULE} component={MealPlanner} />
        <Route path={Routes.NOT_FOUND} component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
