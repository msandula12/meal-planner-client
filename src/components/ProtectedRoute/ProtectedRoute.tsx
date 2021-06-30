import { createElement, FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import {
  deleteUserToken,
  getUserFromToken,
  getUserToken,
  isValidToken,
} from 'api/users';
import { Routes } from 'constants/enums';
import { changeUser } from 'redux/reducers/userSlice';

type OwnProps = {
  component: FunctionComponent;
};

type Props = OwnProps & RouteProps;

function ProtectedRoute({ component, ...rest }: Props) {
  const dispatch = useDispatch();
  const token = getUserToken();

  const hasValidToken = isValidToken(token);

  // Get user from token and update user
  useEffect(() => {
    if (hasValidToken) {
      const user = getUserFromToken(token);
      dispatch(changeUser(user));
    } else {
      deleteUserToken();
      dispatch(changeUser(null));
    }
  }, [dispatch, hasValidToken, token]);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        hasValidToken ? (
          createElement(component)
        ) : (
          <Redirect
            to={{
              pathname: Routes.HOME,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;
