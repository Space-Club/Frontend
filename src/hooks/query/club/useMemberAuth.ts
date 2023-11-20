import getMemberAuth from '@/apis/club/getMemberAuth';
import { MemberAuthRequest } from '@/types/api/memberAuth';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = { MEMBER_AUTH: 'MEMBER_AUTH' };

const useMemberAuth = ({ clubId }: MemberAuthRequest) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.MEMBER_AUTH],
    queryFn: () => getMemberAuth({ clubId }),
  });

  return data;
};

export default useMemberAuth;
