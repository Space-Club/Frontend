import editClubSetting from '@/apis/club/editClubSetting';
import useToast from '@/hooks/useToast';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from './useGetClubQuery';

const useEditClubMutation = () => {
  const queryClient = useQueryClient();

  const { createToast } = useToast();
  const { mutate: editClub, isLoading } = useMutation({
    mutationFn: editClubSetting,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.GET_CLUB]);
    },
    onError: () => {
      createToast({ message: '동아리 정보 수정에 실패했습니다.', toastType: 'error' });
    },
  });

  return { editClub, isLoading };
};

export default useEditClubMutation;
