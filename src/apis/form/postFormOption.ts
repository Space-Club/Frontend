import { END_POINTS } from '@/constants/api';
import { PostFormOptionRequest, PostFormOptionResponse } from '@/types/api/postFormOption';

import { axiosClientWithAuth } from '../axiosClient';

const postFormOption = async ({
  eventId,
  description,
  managed,
  options,
}: PostFormOptionRequest) => {
  const { data } = await axiosClientWithAuth.post<PostFormOptionResponse>(
    END_POINTS.POST_FORM_OPTION,
    {
      eventId,
      description,
      managed,
      options,
    },
  );
  return data;
};

export default postFormOption;
