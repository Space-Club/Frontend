import { END_POINTS } from '@/constants/api';

import { axiosClientWithAuth } from '../axiosClient';

interface deleteClub {
  clubId: string;
}

const deleteClub = async ({ clubId }: deleteClub) => {
  await axiosClientWithAuth.delete(END_POINTS.DELETE_CLUB(clubId));
};

export default deleteClub;
