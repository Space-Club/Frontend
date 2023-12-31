import postCreateClub from '@/apis/club/postCreateClub';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { EXCEPTION_CODE } from '@/constants/exceptionCode';
import { PATH } from '@/constants/path';
import { SUCCESS_MESSAGE } from '@/constants/successMessage';
import useImageException from '@/hooks/useImageException';
import useTextException from '@/hooks/useTextException';
import useToast from '@/hooks/useToast';
import { HttpException } from '@/types/common';

import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { AxiosError } from 'axios';

import { QUERY_KEY } from './useClubs';

const useClub = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { handleTextException } = useTextException();
  const { handleImageException } = useImageException();
  const { createToast } = useToast();

  const { mutate: createClub, isLoading } = useMutation(postCreateClub, {
    onSuccess: (data: string) => {
      queryClient.invalidateQueries([QUERY_KEY.MY_CLUB]);
      createToast({ message: SUCCESS_MESSAGE.CLUB.CREATE, toastType: 'success' });
      const clubId = data.split('/').pop();
      clubId && navigate(PATH.CLUB.HOME(clubId));
    },
    onError: (error: AxiosError<HttpException>) => {
      handleTextException(error);
      handleImageException(error);
      if (
        !Object.entries(EXCEPTION_CODE).find(([, value]) => value === error.response?.data.code)
      ) {
        createToast({ message: ERROR_MESSAGE.CLUB.CREATE_FAILED, toastType: 'error' });
      }
    },
  });

  return { createClub, isLoading };
};

export default useClub;
