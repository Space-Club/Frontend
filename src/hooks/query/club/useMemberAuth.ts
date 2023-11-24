import getMemberAuth from '@/apis/club/getMemberAuth';
import { MemberAuthRequest, MemberAuthResponse } from '@/types/api/memberAuth';
import { HttpException } from '@/types/common';

import { useQuery } from '@tanstack/react-query';

import { AxiosError } from 'axios';

export const QUERY_KEY = { MEMBER_AUTH: 'MEMBER_AUTH' };

const useMemberAuth = ({ clubId }: MemberAuthRequest) => {
  const { data, error, isError } = useQuery<MemberAuthResponse, AxiosError>({
    queryKey: [QUERY_KEY.MEMBER_AUTH, clubId],
    queryFn: () => getMemberAuth({ clubId }),
    retry: 0,
  });

  const httpError = error?.response?.data as HttpException;

  return { role: data?.role, httpError, isError };
};

export default useMemberAuth;
