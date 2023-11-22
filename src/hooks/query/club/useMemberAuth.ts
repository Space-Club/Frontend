import getMemberAuth from '@/apis/club/getMemberAuth';
import { MemberAuthRequest } from '@/types/api/memberAuth';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = { MEMBER_AUTH: 'MEMBER_AUTH' };

const useMemberAuth = ({ clubId }: MemberAuthRequest) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.MEMBER_AUTH, clubId],
    queryFn: () => getMemberAuth({ clubId }),
  });

  const { role } = data ?? {};

  return { role };
};

export default useMemberAuth;
