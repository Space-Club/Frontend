import { END_POINTS } from '@/constants/api';

import { axiosClientWithAuth } from '../axiosClient';

interface GetMyClub {
  id: number;
  logoImageUrl: string | null;
  name: string;
}

const getMyClubs = async () => {
  const { data } = await axiosClientWithAuth.get<GetMyClub[]>(`${END_POINTS.MY_CLUB}/1`);
  //#TODO: path parameter에서 토큰으로 변경하기
  console.log(data);
  return data;
};

export default getMyClubs;
