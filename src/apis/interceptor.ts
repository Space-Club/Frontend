import { EXCEPTION_CODE } from '@/constants/exceptionCode';
import { PATH } from '@/constants/path';
import { HttpException } from '@/types/common';
import { getStorage, setStorage } from '@/utils/localStorage';

import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { axiosClientWithAuth } from './axiosClient';

const handleTokenError = async (error: AxiosError<HttpException>) => {
  const refreshToken = getStorage('refreshToken');
  const originalRequest = error.config;

  if (!originalRequest) {
    return Promise.reject(error);
  }

  originalRequest.headers.RefreshToken = `Bearer ${refreshToken}`;

  if (error.response?.data.code === EXCEPTION_CODE.EXPIRED_ACCESS_TOKEN) {
    return axiosClientWithAuth(originalRequest);
  }

  return Promise.reject(error);
};

const handleRefreshTokenError = (error: AxiosError<HttpException>) => {
  if (error.response?.data.code === EXCEPTION_CODE.EXPIRED_REFRESH_TOKEN) {
    window.location.href = PATH.LOGIN;
  }
  return Promise.reject(error);
};

const setNewAccessToken = (response: AxiosResponse) => {
  const newAccessToken = response.headers.Authorization;

  if (newAccessToken) {
    setStorage('token', newAccessToken);
  }

  return response;
};

const setToken = (config: InternalAxiosRequestConfig) => {
  const token = getStorage('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

export { handleTokenError, setToken, handleRefreshTokenError, setNewAccessToken };
