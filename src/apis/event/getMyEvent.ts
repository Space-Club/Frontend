import { END_POINTS } from '@/constants/api';
import { GetMyEventRequest, GetMyEventResponse } from '@/types/event';

import { axiosClientWithAuth } from '../axiosClient';

const getMyEvent = async ({ pageNumber }: GetMyEventRequest) => {
  const { data } = await axiosClientWithAuth.get<GetMyEventResponse>(
    `${END_POINTS.GET_MY_EVENT}?page=${pageNumber}size=10&sort=id,startDate`,
  );
  return data;
};

export { getMyEvent };
