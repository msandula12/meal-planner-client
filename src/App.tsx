import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Routes } from 'constants/enums';
import { getMockSchedule } from 'mockData/mockData';
import {
  changeSchedule,
  changeSelectedDay,
} from 'redux/reducers/scheduleSlice';
import { isToday } from 'utils/helpers';

import Home from 'components/Home/Home';
import MealPlanner from 'components/MealPlanner/MealPlanner';
import NotFound from 'components/NotFound/NotFound';

function App() {
  const dispatch = useDispatch();

  // Load schedule and set "today" as selected day
  useEffect(() => {
    const schedule = getMockSchedule();
    const today = schedule.find((day) => isToday(day.day));
    dispatch(changeSchedule(schedule));
    dispatch(changeSelectedDay(today));
  }, [dispatch]);

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
