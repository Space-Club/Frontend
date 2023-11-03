import { END_POINTS } from '@/constants/api';
import { PatchMemberRoleRequest } from '@/types/api/patchmemberRole';

import { axiosClientWithAuth } from '../axiosClient';

const patchMemberRole = async ({ memberId, clubId, role }: PatchMemberRoleRequest) => {
  await axiosClientWithAuth.patch(`${END_POINTS.PATCH_MEMBER_ROLE({ clubId, memberId })}`, {
    role,
  });
};

export default patchMemberRole;
