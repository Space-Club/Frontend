import { HttpException } from '@/types/common';
import { getStorage } from '@/utils/localStorage';

import { AxiosError } from 'axios';

import { axiosClientWithAuth } from './axiosClient';

const handleTokenError = async (error: AxiosError<HttpException>) => {
  const refreshToken = getStorage('refreshToken');
  const originalRequest = error.config;

  if (!originalRequest) {
    return Promise.reject(error);
  }

  originalRequest.headers['Authorization'] = `Bearer ${refreshToken}`;
  return axiosClientWithAuth(originalRequest);
};

export { handleTokenError };
