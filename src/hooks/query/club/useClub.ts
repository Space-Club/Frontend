import postCreateClub from '@/apis/club/postCreateClub';

import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

export const useClub = () => {
  const navigate = useNavigate();

  const { mutate: createClub, isLoading } = useMutation(postCreateClub, {
    onSuccess: (data: string) => {
      //#TODO: 클럽 생성 되었다는 토스트 메시지와 함께 이동
      const clubId = data.split('/').pop();
      navigate(`/club/${clubId}/home`);
    },
    onError: () => {
      //#TODO: 클럽 생성에 실패했음을 알리는 토스트 메시지
    },
  });

  return { createClub, isLoading };
};
