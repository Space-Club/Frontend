import { axiosClient } from '@/apis/axiosClient';
import { END_POINTS } from '@/constants/api';
import { PostUserRequest } from '@/types/api/postUser';
import { getStorage } from '@/utils/localStorage';

const postUser = async ({ name, number }: PostUserRequest) => {
  const userId = getStorage('userId');
  await axiosClient.post(END_POINTS.REGISTER, { name, number, userId });
};

export default postUser;
