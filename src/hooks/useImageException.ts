import { EXCEPTION_CODE, EXCEPTION_CODE_MESSAGE } from '@/constants/exceptionCode';
import { HttpException } from '@/types/common';

import { AxiosError } from 'axios';

import useToast from './useToast';

const useImageException = () => {
  const { createToast } = useToast();

  const handleImageException = (error: AxiosError<HttpException>) => {
    if (error.response?.data.code === EXCEPTION_CODE.MAX_IMAGE_SIZE_EXCEEDED) {
      createToast({
        message: EXCEPTION_CODE_MESSAGE.MAX_IMAGE_SIZE_EXCEEDED,
        toastType: 'error',
      });
    } else if (error.response?.data.code === EXCEPTION_CODE.INVALID_FILE_EXTENSION) {
      createToast({
        message: EXCEPTION_CODE_MESSAGE.INVALID_FILE_EXTENSION,
        toastType: 'error',
      });
    }
  };

  return { handleImageException };
};

export default useImageException;
