import { axiosClient } from '@/apis/axiosClient';
import { END_POINTS } from '@/constants/api';

export interface createUser {
  name: string;
  number: string;
}

const postUser = async ({ name, number }: createUser) => {
  await axiosClient.post(END_POINTS.REGISTER, { name, number });
};

export default postUser;
