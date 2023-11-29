import { EXCEPTION_CODE } from '@/constants/exceptionCode';
import { HttpException } from '@/types/common';
import { getStorage } from '@/utils/localStorage';

import { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { axiosClientWithAuth } from './axiosClient';

const handleTokenError = async (error: AxiosError<HttpException>) => {
  const refreshToken = getStorage('refreshToken');
  const originalRequest = error.config;

  if (!originalRequest) {
    return Promise.reject(error);
  }

  originalRequest.headers.Authorization = `Bearer ${refreshToken}`;

  if (error.response?.data.code === EXCEPTION_CODE.INVALID_ACCESS_TOKEN) {
    return axiosClientWithAuth(originalRequest);
  }
  return Promise.reject(error);
};

const setToken = (config: InternalAxiosRequestConfig) => {
  const token = getStorage('token');

  if (!token) {
    throw new Error('토큰이 없습니다.');
  }

  config.headers.Authorization = `Bearer ${token}`;

  return config;
};

export { handleTokenError, setToken };
