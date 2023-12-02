import postPerformanceForm from '@/apis/event/postPerformanceForm';
import { PATH } from '@/constants/path';
import useException from '@/hooks/useException';
import { HttpException } from '@/types/common';
import { FormPage } from '@/types/event';

import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { AxiosError } from 'axios';

import { QUERY_KEY as CLUB_EVENTS_QUERY_KEY } from '../club/useClubEventsQuery';
import { QUERY_KEY as ALL_EVENTS_QUERY_KEY } from './useAllEventsQuery';

const usePostEventInfoMutation = ({ eventType, clubId, isEdit }: FormPage) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { handleException } = useException({ defaultMessage: '정보 작성에 실패했습니다.' });

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
    onError: (error: AxiosError<HttpException>) => {
      handleException(error);
    },
  });
  return { submitForm, isSubmitLoading };
};

export default usePostEventInfoMutation;
