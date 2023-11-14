import { END_POINTS } from '@/constants/api';
import { GetAppliedEventRequest, GetAppliedEventResponse } from '@/types/api/getAppliedEvent';

import { axiosClientWithAuth } from '../axiosClient';

const getAppliedEvent = async ({ pageNumber }: GetAppliedEventRequest) => {
  const { data } = await axiosClientWithAuth.get<GetAppliedEventResponse>(
    `${END_POINTS.GET_APPLIED_EVENT({
      page: pageNumber,
      size: '10',
      sort: 'id',
    })}`,
  );
  return data;
};

export default getAppliedEvent;
