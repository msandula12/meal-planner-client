import axios from 'axios';
import jwt_decode from 'jwt-decode';

import { Token, User } from 'constants/interfaces';

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

export const isValidToken = (token: string) => {
  if (!token) {
    return false;
  }
  const { exp: expiry }: Token = jwt_decode(token);
  const currentTime = Date.now() / 1000;
  return expiry > currentTime;
};

export function saveUserToken(token: string) {
  localStorage.setItem('token', token);
}
