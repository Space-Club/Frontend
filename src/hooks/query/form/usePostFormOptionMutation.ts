import postFormOption from '@/apis/form/postFormOption';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { PATH } from '@/constants/path';
import { SUCCESS_MESSAGE } from '@/constants/successMessage';
import useToast from '@/hooks/useToast';

import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY as CLUB_EVENTS_QUERY_KEY } from '../club/useClubEventsQuery';
import { QUERY_KEY as ALL_EVENTS_QUERY_KEY } from '../event/useAllEventsQuery';

interface usePostFormOptionMutationProps {
  eventId: string;
}

const usePostFormOptionMutation = ({ eventId }: usePostFormOptionMutationProps) => {
  const { createToast } = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: postOption } = useMutation({
    mutationFn: postFormOption,
    onSuccess: () => {
      Promise.all([
        queryClient.invalidateQueries([CLUB_EVENTS_QUERY_KEY.CLUB_EVENTS]),
        queryClient.invalidateQueries([
          ALL_EVENTS_QUERY_KEY.SHOW,
          ALL_EVENTS_QUERY_KEY.PROMOTION,
          ALL_EVENTS_QUERY_KEY.RECRUITMENT,
        ]),
      ]);
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
