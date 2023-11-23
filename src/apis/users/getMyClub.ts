import { END_POINTS } from '@/constants/api';
import { GetMyClubResponse } from '@/types/api/getClub';

import { axiosClientWithAuth } from '../axiosClient';

const getMyClubs = async () => {
  const { data } = await axiosClientWithAuth.get<GetMyClubResponse[]>(`${END_POINTS.MY_CLUB}`);

  return data;
};

export default getMyClubs;
