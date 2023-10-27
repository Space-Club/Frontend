import { END_POINTS } from '@/constants/api';

import { axiosClient } from '../axiosClient';

interface getMyClub {
  id: string;
}
interface Club {
  //추후 수정 필요
  id: string;
  src: string;
}

const getMyClub = async ({ id }: getMyClub) => {
  const { data } = await axiosClient.get<Club[]>(END_POINTS.MY_CLUB, { params: { id } });

  return data;
};

export default getMyClub;
