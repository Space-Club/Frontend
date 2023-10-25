import axios from 'axios';

import { NETWORK_TIMEOUT, SPACECLUB_BASE_URL } from '@constants/api';

export const axiosClient = axios.create({
  baseURL: SPACECLUB_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  timeout: NETWORK_TIMEOUT,
});
