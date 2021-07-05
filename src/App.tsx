import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import classNames from 'classnames';

import { getUserFromToken, getUserToken, isValidToken } from 'api/users';
import { Routes } from 'constants/enums';
import { ThemeContext } from 'context/ThemeContext';
import { changeUser } from 'redux/reducers/userSlice';

import Home from 'components/Home/Home';
import MealPlanner from 'components/MealPlanner/MealPlanner';
import NotFound from 'components/NotFound/NotFound';
import ProtectedRoute from 'components/ProtectedRoute/ProtectedRoute';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const token = getUserToken();
    const hasValidToken = isValidToken(token);
    if (hasValidToken) {
      const user = getUserFromToken(token);
      dispatch(changeUser(user));
      history.push(Routes.SCHEDULE);
    }
  }, [dispatch, history]);

  const cls = classNames({
    dark: isDarkMode,
  });

  return (
    <div className={cls}>
      <Switch>
        <Route exact path={Routes.HOME} component={Home} />
        <Route path={Routes.DEMO} component={MealPlanner} />
        <ProtectedRoute path={Routes.SCHEDULE} component={MealPlanner} />
        <Route path={Routes.NOT_FOUND} component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
