import { getStorage } from '@/utils/localStorage';

import axios from 'axios';

import { NETWORK_TIMEOUT } from '@constants/api';

export const axiosClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  timeout: NETWORK_TIMEOUT,
});

export const axiosClientWithAuth = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: getStorage('token'),
  },
  withCredentials: true,
  timeout: NETWORK_TIMEOUT,
});
