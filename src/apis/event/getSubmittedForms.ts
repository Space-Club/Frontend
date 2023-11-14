import { END_POINTS } from '@/constants/api';

import { axiosClientWithAuth } from '../axiosClient';

const getSubmittedForms = async ({ eventId = 1 }) => {
  const { data } = await axiosClientWithAuth.get(END_POINTS.GET_SUBMITTED_FORMS({ eventId }));

  return data;
};

export default getSubmittedForms;
