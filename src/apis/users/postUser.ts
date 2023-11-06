import { axiosClient } from '@/apis/axiosClient';
import { END_POINTS } from '@/constants/api';
import { PostUserRequest, PostUserResponse } from '@/types/api/postUser';
import { getStorage, setStorage } from '@/utils/localStorage';

const postUser = async ({ nickname, phoneNumber }: PostUserRequest) => {
  const userId = getStorage('userId');
  const { data } = await axiosClient.post<PostUserResponse>(END_POINTS.REGISTER, {
    nickname,
    phoneNumber,
    userId,
  });
  setStorage('token', data.accessToken);
  return data;
};

export default postUser;
