import postPerformanceForm from '@/apis/event/postPerformanceForm';
import { eventQueryString } from '@/types/event';
import eventTypeTransform from '@/utils/eventTypeTransform';

import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

const useSubmitForm = () => {
  const navigate = useNavigate();
  const { clubId } = useParams();
  const searchParmas = useSearchParams();
  const eventQueryString = searchParmas[0].get('event') as eventQueryString;
  const eventType = eventTypeTransform({ eventQueryString });

  const { mutate: submitForm, isLoading: isSubmitLoading } = useMutation(postPerformanceForm, {
    onSuccess: (data) => {
      if (!clubId) throw new Error('clubId가 없습니다.');
      navigate(`/club/${clubId}/writeform/${data.eventId}?event=${eventType}`);
    },
    onError: (error) => {
      console.log(error);
      // TODO 구현 예정
    },
  });
  return { submitForm, isSubmitLoading };
};

export default useSubmitForm;
