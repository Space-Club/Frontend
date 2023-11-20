import { END_POINTS } from '@/constants/api';

import { axiosClientWithAuth } from '../axiosClient';

const deleteUser = async () => {
  await axiosClientWithAuth.delete(END_POINTS.DELETE_USER);
};

export default deleteUser;
