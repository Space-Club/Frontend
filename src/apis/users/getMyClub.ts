import { END_POINTS } from '@/constants/api';

import { axiosClientWithAuth } from '../axiosClient';

interface GetMyClub {
  id: number;
  logoImageUrl: string | null;
  name: string;
}

interface GetMyClubsResponse {
  data: GetMyClub[];
}

const getMyClubs = async () => {
  const { data } = await axiosClientWithAuth.get<GetMyClubsResponse>(`${END_POINTS.MY_CLUB}/1`);
  return data;
};

export default getMyClubs;
