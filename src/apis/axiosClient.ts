import axios from 'axios';

import { NETWORK_TIMEOUT } from '@constants/api';

import { handleTokenError, setToken } from './interceptor';

const BASE_OPTION = {
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'https://spaceclub.site/api/v1',
  withCredentials: true,
  timeout: NETWORK_TIMEOUT,
};

export const axiosClient = axios.create(BASE_OPTION);

export const axiosClientWithAuth = axios.create(BASE_OPTION);

axiosClientWithAuth.interceptors.request.use(setToken);
axiosClientWithAuth.interceptors.response.use((response) => response, handleTokenError);
