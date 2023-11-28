import patchSubmittedFormStatus from '@/apis/form/patchSubmittedFormStatus';
import useToast from '@/hooks/useToast';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from '../event/useGetSubmittedFormsQuery';

const useSubmittedFormStatusMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const { mutate: changeSubmittedFormStatus } = useMutation({
    mutationFn: patchSubmittedFormStatus,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.SUBMITTED_FORMS]);
    },
    onError: () => {
      createToast({ message: '폼 상태 변경에 실패했습니다.', toastType: 'error' });
    },
  });

  return { changeSubmittedFormStatus };
};

export default useSubmittedFormStatusMutation;
