import postCreateClub from '@/apis/club/postCreateClub';

import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

export const useClub = () => {
  const navigate = useNavigate();

  const { mutate: createClub, isLoading } = useMutation(postCreateClub, {
    onSuccess: () => {
      navigate('/'); //생성된 클럽 홈 화면? 아니면 클럽 관리 화면?
    },
    onError: () => {
      //#TODO: 클럽 생성에 실패했음을 알리는 토스트 메시지?
    },
  });

  return { createClub, isLoading };
};
