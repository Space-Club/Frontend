import postCreateClub from '@/apis/club/postCreateClub';
import { PATH } from '@/constants/path';

import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from './useClubs';

export const useClub = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: createClub, isLoading } = useMutation(postCreateClub, {
    onSuccess: (data: string) => {
      //#TODO: 클럽 생성 되었다는 토스트 메시지와 함께 이동
      queryClient.invalidateQueries([QUERY_KEY.MY_CLUB]);
      const clubId = data.split('/').pop();

      clubId && navigate(PATH.CLUB.HOME(clubId));
    },
    onError: () => {
      //#TODO: 클럽 생성에 실패했음을 알리는 토스트 메시지
    },
  });

  return { createClub, isLoading };
};
