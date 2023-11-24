import postJoinClub from '@/apis/club/postJoinClub';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { EXCEPTION_CODE_MESSAGE } from '@/constants/exceptionCode';
import { PATH } from '@/constants/path';
import { SUCCESS_MESSAGE } from '@/constants/successMessage';
import useToast from '@/hooks/useToast';

import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { isAxiosError } from 'axios';

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
    onError: (error) => {
      if (isAxiosError<ResponseDataType>(error)) {
        const errorCode = error.response?.data.split(':')[1]; //#TODO: 추후 에러코드만 오면 바꾸기
        const { INVITE_EXPIRED, INVITE_NOT_FOUND, CLUB_ALREADY_JOINED } = EXCEPTION_CODE_MESSAGE;
        createToast({
          message: !errorCode
            ? ERROR_MESSAGE.CLUB.JOIN_FAILED
            : errorCode === CLUB_ALREADY_JOINED
            ? CLUB_ALREADY_JOINED
            : errorCode === INVITE_EXPIRED
            ? INVITE_EXPIRED
            : INVITE_NOT_FOUND,
          toastType: 'error',
        });
      }
    },
  });

  return { joinClub, isLoading };
};

export default useJoinClub;
