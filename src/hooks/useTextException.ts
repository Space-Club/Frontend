import { EXCEPTION_CODE, EXCEPTION_CODE_MESSAGE } from '@/constants/exceptionCode';
import { HttpException } from '@/types/common';

import { AxiosError } from 'axios';

import useToast from './useToast';

const useTextException = () => {
  const { createToast } = useToast();

  const handleTextException = (error: AxiosError<HttpException>) => {
    if (error.response?.data.code === EXCEPTION_CODE.BAD_WORD_DETECTED) {
      createToast({ message: EXCEPTION_CODE_MESSAGE.BAD_WORD_DETECTED, toastType: 'error' });
    }
  };

  return { handleTextException };
};

export default useTextException;
