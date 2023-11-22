import { MemberRole } from '../user';

interface MemberAuthRequest {
  clubId: string;
}

interface MemberAuthResponse {
  role: MemberRole;
}

export { MemberAuthRequest, MemberAuthResponse };
