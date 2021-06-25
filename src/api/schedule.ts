import axios from 'axios';

import { User } from 'constants/interfaces';

import { ApiRoutes, BASE_URL } from './index';

export function getSchedule(user: User) {
  return axios.get(`${BASE_URL}/${ApiRoutes.SCHEDULE}/${user.id}`);
}
