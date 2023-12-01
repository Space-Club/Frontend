import { EXCEPTION_CODE } from '@/constants/exceptionCode';
import { PATH } from '@/constants/path';
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

const handleRefreshTokenError = (error: AxiosError<HttpException>) => {
  if (error.response?.data.code === EXCEPTION_CODE.INVALID_REFRESH_TOKEN) {
    alert('로그인이 만료되었습니다. 다시 로그인해주세요.');
    window.location.href = PATH.LOGIN;
  }
  return Promise.reject(error);
};

const setToken = (config: InternalAxiosRequestConfig) => {
  const token = getStorage('token');

  if (!token) {
    throw new Error('로컬 스토리지에 토큰이 없는 상태에서 인증된 유저의 API를 요청했습니다.');
  }

  config.headers.Authorization = `Bearer ${token}`;

  return config;
};

export { handleTokenError, setToken, handleRefreshTokenError };
