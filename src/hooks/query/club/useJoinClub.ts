import postJoinClub from '@/apis/club/postJoinClub';
import { PATH } from '@/constants/path';

import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from './useClubs';

const useJoinClub = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: joinClub, isLoading } = useMutation(postJoinClub, {
    onSuccess: (data: string) => {
      queryClient.invalidateQueries([QUERY_KEY.MY_CLUB]);

      navigate(PATH.CLUB.HOME(data));
    },
    onError: (error) => {
      console.log(error);
      //TODO: 클럽 가입 실패했다는 메시지
    },
  });

  return { joinClub, isLoading };
};

export default useJoinClub;
