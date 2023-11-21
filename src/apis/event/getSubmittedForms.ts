import { END_POINTS } from '@/constants/api';
import { GetSubmittedFormsRequest, GetSubmittedFormsResponse } from '@/types/api/submittedForms';

import { axiosClientWithAuth } from '../axiosClient';

const getSubmittedForms = async ({ eventId, pageNumber }: GetSubmittedFormsRequest) => {
  const { data } = await axiosClientWithAuth.get<GetSubmittedFormsResponse>(
    END_POINTS.GET_SUBMITTED_FORMS({ eventId, pageNumber }),
  );

  return data;
};

export default getSubmittedForms;
