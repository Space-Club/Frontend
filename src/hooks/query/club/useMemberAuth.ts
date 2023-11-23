import getMemberAuth from '@/apis/club/getMemberAuth';
import { MemberAuthRequest, MemberAuthResponse } from '@/types/api/memberAuth';

import { useQuery } from '@tanstack/react-query';

import { AxiosError } from 'axios';

export const QUERY_KEY = { MEMBER_AUTH: 'MEMBER_AUTH' };

const useMemberAuth = ({ clubId }: MemberAuthRequest) => {
  const { data, error, isError } = useQuery<MemberAuthResponse, AxiosError>({
    queryKey: [QUERY_KEY.MEMBER_AUTH, clubId],
    queryFn: () => getMemberAuth({ clubId }),
    retry: 0,
  });

  return { role: data?.role, errorCode: error?.response?.data, isError };
};

export default useMemberAuth;
