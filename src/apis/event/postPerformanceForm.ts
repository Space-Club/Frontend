import { axiosClient } from '@/apis/axiosClient';
import { END_POINTS } from '@/constants/api';
import dataTransform from '@/utils/dataTransform';

import { FieldValues } from 'react-hook-form';

interface postPerformanceForm {
  data: FieldValues;
  eventType: 'SHOW' | 'PROMOTION' | 'RECRUITMENT' | 'CLUB';
  clubId: string;
}

const postPerformanceForm = async ({ data, eventType, clubId }: postPerformanceForm) => {
  const requestData = dataTransform({ data, eventType, clubId });
  const formData = new FormData();
  const blobRequest = new Blob([JSON.stringify(requestData)], { type: 'application/json' });
  formData.append('request', blobRequest);
  formData.append('posterImage', data.poster[0]);

  await axiosClient.post(`${END_POINTS.PERFORMANCE_FORM}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    params: {
      category: eventType,
    },
  });
};

export default postPerformanceForm;
