import { END_POINTS } from '@/constants/api';
import { GetClubRequest, GetClubResponse } from '@/types/api/getClub';

import { axiosClientWithAuth } from '../axiosClient';

const getClub = async ({ clubId }: GetClubRequest) => {
  const { data } = await axiosClientWithAuth.get<GetClubResponse>(END_POINTS.GET_CLUB({ clubId }));

  return data;
};

export default getClub;
