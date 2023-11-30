import postPerformanceForm from '@/apis/event/postPerformanceForm';
import { PATH } from '@/constants/path';
import useImageException from '@/hooks/useImageException';
import useTextException from '@/hooks/useTextException';
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
  const { handleTextException } = useTextException();
  const { handleImageException } = useImageException();

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
      handleTextException(error);
      handleImageException(error);
    },
  });
  return { submitForm, isSubmitLoading };
};

export default usePostEventInfoMutation;
