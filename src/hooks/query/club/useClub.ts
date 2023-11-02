import postCreateClub from '@/apis/club/postCreateClub';

import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

export const useClub = () => {
  const navigate = useNavigate();

  const { mutate: createClub, isLoading } = useMutation(postCreateClub, {
    onSuccess: (data) => {
      //#TODO: 클럽 생성 되었다는 토스트 메시지와 함께 이동
      navigate(`/${data}`); //생성된 클럽 홈 화면? 아니면 클럽 관리 화면?
    },
    onError: () => {
      console.log('생성 실패');
      //#TODO: 클럽 생성에 실패했음을 알리는 토스트 메시지?
    },
  });

  return { createClub, isLoading };
};
