import postPerformanceForm from '@/apis/event/postPerformanceForm';
import { PATH } from '@/constants/path';
import { FormPage } from '@/types/event';

import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY as CLUB_EVENTS_QUERY_KEY } from '../club/useClubEventsQuery';
import { QUERY_KEY as ALL_EVENTS_QUERY_KEY } from '../event/useAllEventsQuery';

const useSubmitForm = ({ eventType, clubId, isEdit }: FormPage) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: submitForm, isLoading: isSubmitLoading } = useMutation({
    mutationFn: postPerformanceForm,
    onSuccess: (data) => {
      if (isEdit) {
        navigate(-1);
      } else {
        navigate(PATH.CLUB.WRITE_FORM_QUERY(clubId, data.eventId, eventType));
      }
      Promise.all([
        queryClient.invalidateQueries([CLUB_EVENTS_QUERY_KEY.CLUB_EVENTS]),
        queryClient.invalidateQueries([
          ALL_EVENTS_QUERY_KEY.SHOW,
          ALL_EVENTS_QUERY_KEY.PROMOTION,
          ALL_EVENTS_QUERY_KEY.RECRUITMENT,
        ]),
      ]);
    },
    onError: (error) => {
      console.log(error);
      // TODO 구현 예정
    },
  });
  return { submitForm, isSubmitLoading };
};

export default useSubmitForm;
