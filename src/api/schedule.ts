import axios from 'axios';

import { Day, User } from 'constants/interfaces';

import { ApiRoutes, BASE_URL } from './index';

export function getSchedule(user: User) {
  return axios.get(`${BASE_URL}/${ApiRoutes.SCHEDULE}/${user.id}`);
}

export function updateDay(user: User, day: Day) {
  return axios.post(`${BASE_URL}/${ApiRoutes.SCHEDULE}/${user.id}`, { day });
}
