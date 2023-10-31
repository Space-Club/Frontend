import postPerformanceForm from '@/apis/event/postPerformanceForm';

import { useMutation } from '@tanstack/react-query';

const useSubmitForm = () => {
  const mutation = useMutation(postPerformanceForm, {
    onSuccess: (data) => {
      console.log(data);
      // TODO 구현 예정
    },
    onError: (error) => {
      console.log(error);
      // TODO 구현 예정
    },
  });
  return mutation;
};

export default useSubmitForm;
