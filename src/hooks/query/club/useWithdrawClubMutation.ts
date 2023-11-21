import withdrawClub from '@/apis/club/withdrawClub';
import { PATH } from '@/constants/path';
import useToast from '@/hooks/useToast';

import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from './useClubs';

const useWithdrawClubMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { createToast } = useToast();

  const { mutate: withdrawClubMutate } = useMutation({
    mutationFn: withdrawClub,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.MY_CLUB]);
      createToast({ message: '클럽 탈퇴가 완료되었습니다.', toastType: 'success' });
      navigate(PATH.MAIN);
    },
    onError: () => {}, //#TODO: error 코드에 따라 토스트 메시지 다르게 보여주기
  });

  return { withdrawClubMutate };
};

export default useWithdrawClubMutation;
