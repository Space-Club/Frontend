import postFormOption from '@/apis/form/postFormOption';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { PATH } from '@/constants/path';
import { SUCCESS_MESSAGE } from '@/constants/successMessage';
import useToast from '@/hooks/useToast';

import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

interface usePostFormOptionMutationProps {
  eventId: string;
}

const usePostFormOptionMutation = ({ eventId }: usePostFormOptionMutationProps) => {
  const { createToast } = useToast();
  const navigate = useNavigate();

  const { mutate: postOption } = useMutation({
    mutationFn: postFormOption,
    onSuccess: () => {
      createToast({ message: SUCCESS_MESSAGE.FORM.POST_OPTION, toastType: 'success' });
      navigate(PATH.EVENT.DETAIL(eventId));
    },
    onError: () => {
      createToast({ message: ERROR_MESSAGE.FORM.POST_OPTION, toastType: 'error' });
    },
  });

  return { postOption };
};

export default usePostFormOptionMutation;
