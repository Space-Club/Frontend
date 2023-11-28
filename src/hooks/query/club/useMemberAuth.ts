import getMemberAuth from '@/apis/club/getMemberAuth';
import { MemberAuthResponse } from '@/types/api/memberAuth';
import { HttpException } from '@/types/common';

import { useQuery } from '@tanstack/react-query';

import { AxiosError } from 'axios';

export const QUERY_KEY = { MEMBER_AUTH: 'MEMBER_AUTH' };

interface UseMemberAuth {
  clubId: string;
  isEnabled?: boolean;
}

const useMemberAuth = ({ clubId, isEnabled = true }: UseMemberAuth) => {
  if (!clubId) null;
  const { data, error, isError, refetch } = useQuery<MemberAuthResponse, AxiosError>({
    queryKey: [QUERY_KEY.MEMBER_AUTH, clubId],
    queryFn: () => getMemberAuth({ clubId }),
    enabled: isEnabled,
    retry: 0,
  });

  const httpError = error?.response?.data as HttpException;

  return { role: data?.role, httpError, isError, refetch };
};

export default useMemberAuth;
