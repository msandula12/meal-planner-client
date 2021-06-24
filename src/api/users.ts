import axios from 'axios';
import jwt_decode from 'jwt-decode';

import { User } from 'constants/interfaces';

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

export function getUserFromToken(token: string) {
  const user: User = jwt_decode(token);
  return user;
}

export function deleteUserToken() {
  localStorage.removeItem('token');
}

export function getUserToken() {
  return localStorage.getItem('token') || '';
}

export function saveUserToken(token: string) {
  localStorage.setItem('token', token);
}
