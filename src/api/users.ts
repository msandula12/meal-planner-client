import axios from 'axios';

import { ApiRoutes, BASE_URL } from './index';

export function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return axios.post(`${BASE_URL}/${ApiRoutes.USERS}/signin`, {
    email,
    password,
  });
}

export function signUp({
  confirmPassword,
  email,
  password,
}: {
  confirmPassword: string;
  email: string;
  password: string;
}) {
  return axios.post(`${BASE_URL}/${ApiRoutes.USERS}/signup`, {
    confirmPassword,
    email,
    password,
  });
}
