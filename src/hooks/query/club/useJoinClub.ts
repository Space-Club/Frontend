import postJoinClub from '@/apis/club/postJoinClub';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { EXCEPTION_CODE, EXCEPTION_CODE_MESSAGE } from '@/constants/exceptionCode';
import { PATH } from '@/constants/path';
import { SUCCESS_MESSAGE } from '@/constants/successMessage';
import useToast from '@/hooks/useToast';
import { HttpException } from '@/types/common';

import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { AxiosError, isAxiosError } from 'axios';

import { QUERY_KEY } from './useClubs';

type ResponseDataType = string;

const useJoinClub = () => {
  const { createToast } = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: joinClub, isLoading } = useMutation(postJoinClub, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEY.MY_CLUB]);
      createToast({ message: SUCCESS_MESSAGE.CLUB.JOIN, toastType: 'success' });
      navigate(PATH.CLUB.HOME(data.clubId));
    },
    onError: (error: AxiosError<HttpException>) => {
      if (isAxiosError<ResponseDataType>(error)) {
        const errorCode = error.response?.data.code;
        const { INVITE_EXPIRED, INVITE_NOT_FOUND, CLUB_ALREADY_JOINED, CLUB_NOT_FOUND } =
          EXCEPTION_CODE;
        if (errorCode === INVITE_EXPIRED) {
          createToast({ message: EXCEPTION_CODE_MESSAGE.INVITE_EXPIRED, toastType: 'error' });
        } else if (errorCode === INVITE_NOT_FOUND) {
          createToast({ message: EXCEPTION_CODE_MESSAGE.INVITE_NOT_FOUND, toastType: 'error' });
        } else if (errorCode === CLUB_ALREADY_JOINED) {
          createToast({ message: EXCEPTION_CODE_MESSAGE.CLUB_ALREADY_JOINED, toastType: 'error' });
        } else if (errorCode === CLUB_NOT_FOUND) {
          createToast({ message: EXCEPTION_CODE_MESSAGE.CLUB_NOT_FOUND, toastType: 'error' });
        } else {
          createToast({ message: ERROR_MESSAGE.CLUB.JOIN_FAILED, toastType: 'error' });
        }
      }
    },
  });

  return { joinClub, isLoading };
};

export default useJoinClub;
