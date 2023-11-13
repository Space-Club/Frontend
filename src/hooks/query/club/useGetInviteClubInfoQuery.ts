import getInviteClubInfo from '@/apis/club/getInviteClubInfo';

import { useQuery } from '@tanstack/react-query';

const QUERY_KEY = 'GET_INVITE_CLUB_INFO';

const useGetInviteClubInfoQuery = (inviteCode: string) => {
  const { data: inviteClubInfo } = useQuery({
    queryFn: () => getInviteClubInfo(inviteCode),
    queryKey: [QUERY_KEY],
  });

  return { inviteClubInfo };
};

export default useGetInviteClubInfoQuery;
