import { END_POINTS } from '@/constants/api';

import { axiosClientWithAuth } from '../axiosClient';

interface GetMyClub {
  clubId: number;
  clubImage: string | null;
  clubName: string;
}

interface GetMyClubsResponse {
  data: GetMyClub[];
}

const getMyClubs = async () => {
  const { data } = await axiosClientWithAuth.get<GetMyClubsResponse>(`${END_POINTS.MY_CLUB}`);
  return data;
};

export default getMyClubs;
