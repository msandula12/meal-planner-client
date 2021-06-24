import { createElement, FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import { getUserFromToken, getUserToken } from 'api/users';
import { Routes } from 'constants/enums';
import { Token } from 'constants/interfaces';
import { changeUser } from 'redux/reducers/userSlice';

type OwnProps = {
  component: FunctionComponent;
};

type Props = OwnProps & RouteProps;

function ProtectedRoute({ component, ...rest }: Props) {
  const dispatch = useDispatch();
  const token = getUserToken();

  const isValidToken = () => {
    if (!token) {
      return false;
    }
    const { exp: expiry }: Token = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    return expiry > currentTime;
  };

  const hasValidToken = isValidToken();

  // Get user from token and update user
  useEffect(() => {
    if (hasValidToken) {
      const user = getUserFromToken(token);
      dispatch(changeUser(user));
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
