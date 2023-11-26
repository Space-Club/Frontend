import { getStorage } from '@/utils/localStorage';

import axios from 'axios';

import { NETWORK_TIMEOUT } from '@constants/api';

import { handleTokenError } from './interceptor';

const BASE_OPTION = {
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'https://spaceclub.site/api/v1',
  withCredentials: true,
  timeout: NETWORK_TIMEOUT,
};

export const axiosClient = axios.create(BASE_OPTION);

export const axiosClientWithAuth = axios.create({
  ...BASE_OPTION,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getStorage('token')}`,
  },
});

axiosClientWithAuth.interceptors.response.use((response) => response, handleTokenError);
