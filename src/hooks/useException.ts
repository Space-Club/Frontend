import { EXCEPTION_CODE, EXCEPTION_CODE_MESSAGE } from '@/constants/exceptionCode';
import { HttpException } from '@/types/common';

import { AxiosError } from 'axios';

import useToast from './useToast';

interface UseException {
  defaultMessage: string;
}

const useException = ({ defaultMessage }: UseException) => {
  const { createToast } = useToast();

  const handleException = (error: AxiosError<HttpException>) => {
    if (!error.response) {
      createToast({ message: defaultMessage, toastType: 'error' });
      return;
    }

    if (Object.values(EXCEPTION_CODE).find((code) => code === error.response?.data.code)) {
      createToast({
        message: EXCEPTION_CODE_MESSAGE[error.response?.data.code],
        toastType: 'error',
      });
    } else {
      createToast({ message: defaultMessage, toastType: 'error' });
    }
  };

  return { handleException };
};

export default useException;
