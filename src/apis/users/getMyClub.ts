import { END_POINTS } from '@/constants/api';

import { axiosClient } from '../axiosClient';

interface GetMyClub {
  clubId: number;
  clubImage: string | null;
  clubName: string;
}

interface GetMyClubsResponse {
  data: GetMyClub[];
}

const getMyClubs = async () => {
  const { data } = await axiosClient.get<GetMyClubsResponse>(`${END_POINTS.MY_CLUB}`);
  console.log(data);
  return data;
};

export default getMyClubs;
