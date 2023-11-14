import postPerformanceForm from '@/apis/event/postPerformanceForm';
import { PATH } from '@/constants/path';
import { eventTypeAPI } from '@/types/event';

import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

const useSubmitForm = () => {
  const navigate = useNavigate();
  const { clubId } = useParams();
  const searchParmas = useSearchParams();
  const eventType = searchParmas[0].get('event')?.toUpperCase() as eventTypeAPI;

  const { mutate: submitForm, isLoading: isSubmitLoading } = useMutation(postPerformanceForm, {
    onSuccess: (data) => {
      if (!clubId) throw new Error('clubId가 없습니다.');
      navigate(PATH.CLUB.WRITE_FORM(clubId, data.eventId, eventType));
    },
    onError: (error) => {
      console.log(error);
      // TODO 구현 예정
    },
  });
  return { submitForm, isSubmitLoading };
};

export default useSubmitForm;
