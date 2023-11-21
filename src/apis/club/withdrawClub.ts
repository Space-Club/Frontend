import { END_POINTS } from '@/constants/api';
import { WithdrawClubRequest } from '@/types/api/withdrawClub';

import { axiosClientWithAuth } from '../axiosClient';

const withdrawClub = async ({ clubId }: WithdrawClubRequest) => {
  await axiosClientWithAuth.delete(END_POINTS.WITHDRAW_CLUB({ clubId }));
};

export default withdrawClub;
