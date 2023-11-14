import postFormOption from '@/apis/form/postFormOption';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { SUCCESS_MESSAGE } from '@/constants/successMessage';
import useToast from '@/hooks/useToast';

import { useMutation } from '@tanstack/react-query';

const usePostFormOptionMutation = () => {
  const { createToast } = useToast();

  const { mutate: postOption } = useMutation({
    mutationFn: postFormOption,
    onSuccess: () => {
      createToast({ message: SUCCESS_MESSAGE.FORM.POST_OPTION, toastType: 'success' });
    },
    onError: () => {
      createToast({ message: ERROR_MESSAGE.FORM.POST_OPTION, toastType: 'error' });
    },
  });

  return postOption;
};

export default usePostFormOptionMutation;
