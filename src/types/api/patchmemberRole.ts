import { MemberRole } from '../user';

interface PatchMemberRoleRequest {
  memberId: string;
  clubId: string;
  role: MemberRole;
}

export { PatchMemberRoleRequest };
