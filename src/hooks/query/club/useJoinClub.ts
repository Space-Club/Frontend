import postJoinClub from '@/apis/club/postJoinClub';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { PATH } from '@/constants/path';
import useToast from '@/hooks/useToast';

import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from './useClubs';

const useJoinClub = () => {
  const { createToast } = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: joinClub, isLoading } = useMutation(postJoinClub, {
    onSuccess: (data: string) => {
      queryClient.invalidateQueries([QUERY_KEY.MY_CLUB]);
      createToast({ message: '클럽 가입이 완료되었습니다.', toastType: 'success' });
      navigate(PATH.CLUB.HOME(data));
    },
    onError: () => {
      createToast({ message: ERROR_MESSAGE.CLUB.JOIN_FAILED, toastType: 'error' });
    },
  });

  return { joinClub, isLoading };
};

export default useJoinClub;
