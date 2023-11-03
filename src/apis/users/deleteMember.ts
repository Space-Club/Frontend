import { END_POINTS } from '@/constants/api';
import { DeleteMemberRequest } from '@/types/api/deleteMember';

import { axiosClient } from '../axiosClient';

const deleteMember = async ({ memberId, clubId }: DeleteMemberRequest) => {
  await axiosClient.delete(`${END_POINTS.DELETE_MEMBER({ clubId, memberId })}`);
};

export default deleteMember;
