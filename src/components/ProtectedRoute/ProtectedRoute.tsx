import { createElement, FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { getUserFromToken, getUserToken, hasValidToken } from 'api/users';
import { Routes } from 'constants/enums';
import { changeUser } from 'redux/reducers/userSlice';

type OwnProps = {
  component: FunctionComponent;
};

type Props = OwnProps & RouteProps;

function ProtectedRoute({ component, ...rest }: Props) {
  const dispatch = useDispatch();
  const token = getUserToken();

  const isValidToken = hasValidToken();

  // Get user from token and update user
  useEffect(() => {
    if (isValidToken) {
      const user = getUserFromToken(token);
      dispatch(changeUser(user));
    }
  }, [dispatch, isValidToken, token]);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isValidToken ? (
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
