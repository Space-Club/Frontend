import { axiosClient } from '@/apis/axiosClient';
import { END_POINTS } from '@/constants/api';
import { PostUserRequest, PostUserResponse } from '@/types/api/postUser';
import { getStorage, setStorage } from '@/utils/localStorage';

import { useNavigate } from 'react-router-dom';

const postUser = async (
  { name, phoneNumber }: PostUserRequest,
  navigate: ReturnType<typeof useNavigate>,
) => {
  const userId = getStorage('userId');
  const returnPage = sessionStorage.getItem('returnpage');

  const { data } = await axiosClient.post<PostUserResponse>(END_POINTS.REGISTER, {
    name,
    phoneNumber,
    userId,
  });
  setStorage('token', data.accessToken);

  if (returnPage) {
    navigate(returnPage);
  }
  return data;
};

export default postUser;
