import { END_POINTS } from '@/constants/api';

import { axiosClientWithAuth } from '../axiosClient';

const postLogout = async () => {
  await axiosClientWithAuth.post(END_POINTS.LOGOUT);
};

export default postLogout;
