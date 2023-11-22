import { axiosClientWithAuth } from '@/apis/axiosClient';
import { END_POINTS } from '@/constants/api';
import {
  postPerformanceFormRequest,
  postPerformanceFormResponse,
} from '@/types/api/postPerformanceForm';
import dataTransform from '@/utils/dataTransform';

const postPerformanceForm = async ({
  data,
  eventType,
  clubId,
  eventId,
}: postPerformanceFormRequest) => {
  const requestData = dataTransform({ data, eventType, clubId, eventId });
  const formData = new FormData();

  const blobRequest = new Blob([JSON.stringify(requestData)], { type: 'application/json' });
  formData.append('request', blobRequest);
  if (data.poster[0]) formData.append('posterImage', data.poster[0]);
  formData.append('category', eventType);

  const { data: responseData } = await axiosClientWithAuth[
    eventId ? 'patch' : 'post'
  ]<postPerformanceFormResponse>(`${END_POINTS.PERFORMANCE_FORM}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return responseData;
};

export default postPerformanceForm;
