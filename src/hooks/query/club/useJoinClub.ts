import postJoinClub from '@/apis/club/postJoinClub';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { PATH } from '@/constants/path';
import { SUCCESS_MESSAGE } from '@/constants/successMessage';
import useToast from '@/hooks/useToast';

import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from './useClubs';

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
      console.log(error);
      //#TODO: error 코드 분리하기
      createToast({ message: ERROR_MESSAGE.CLUB.JOIN_FAILED, toastType: 'error' });
    },
  });

  return { joinClub, isLoading };
};

export default useJoinClub;
