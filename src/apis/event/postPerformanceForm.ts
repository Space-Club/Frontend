import { axiosClient } from '@/apis/axiosClient';
import { END_POINTS } from '@/constants/api';
import { eventTypeAPI, postPerformanceFormResponse } from '@/types/event';
import dataTransform from '@/utils/dataTransform';

import { FieldValues } from 'react-hook-form';

interface postPerformanceForm {
  data: FieldValues;
  eventType: eventTypeAPI;
  clubId: string;
}

const postPerformanceForm = async ({ data, eventType, clubId }: postPerformanceForm) => {
  const requestData = dataTransform({ data, eventType, clubId });
  const formData = new FormData();
  const blobRequest = new Blob([JSON.stringify(requestData)], { type: 'application/json' });
  formData.append('request', blobRequest);
  formData.append('posterImage', data.poster[0]);

  const { data: responseData } = await axiosClient.post<postPerformanceFormResponse>(
    `${END_POINTS.PERFORMANCE_FORM}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      params: {
        category: eventType,
      },
    },
  );

  return responseData;
};

export default postPerformanceForm;
