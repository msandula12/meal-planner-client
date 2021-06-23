import axios from 'axios';

import { ApiRoutes, BASE_URL } from './index';

export function signIn({
  password,
  email,
}: {
  password: string;
  email: string;
}) {
  return axios.post(`${BASE_URL}/${ApiRoutes.USERS}/signin`, {
    password,
    email,
  });
}

export function signUp({
  name,
  email,
  password,
  confirmPassword,
}: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}) {
  return axios.post(`${BASE_URL}/${ApiRoutes.USERS}/signup`, {
    name,
    email,
    password,
    confirmPassword,
  });
}
