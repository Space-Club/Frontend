import patchSubmittedFormStatus from '@/apis/form/patchSubmittedFormStatus';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from '../event/useGetSubmittedFormsQuery';

const useSubmittedFormStatusMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: changeSubmittedFormStatus } = useMutation({
    mutationFn: patchSubmittedFormStatus,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.SUBMITTED_FORMS]);
    },
    onError: () => {}, //실패 토스트 메시지
  });

  return { changeSubmittedFormStatus };
};

export default useSubmittedFormStatusMutation;
