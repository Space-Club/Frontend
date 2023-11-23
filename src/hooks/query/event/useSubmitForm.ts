import postPerformanceForm from '@/apis/event/postPerformanceForm';
import { PATH } from '@/constants/path';
import { FormPage } from '@/types/event';

import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

const useSubmitForm = ({ eventType, clubId }: FormPage) => {
  const navigate = useNavigate();

  const { mutate: submitForm, isLoading: isSubmitLoading } = useMutation(postPerformanceForm, {
    onSuccess: (data) => {
      navigate(PATH.CLUB.WRITE_FORM_QUERY(clubId, data.eventId, eventType));
    },
    onError: (error) => {
      console.log(error);
      // TODO 구현 예정
    },
  });
  return { submitForm, isSubmitLoading };
};

export default useSubmitForm;
