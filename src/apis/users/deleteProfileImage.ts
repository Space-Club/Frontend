import { END_POINTS } from '@/constants/api';

import { axiosClientWithAuth } from '../axiosClient';

const deleteProfileImage = async () => {
  await axiosClientWithAuth.delete(END_POINTS.DELETE_PROFILE_IMAGE);
};

export default deleteProfileImage;
