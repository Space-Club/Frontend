import getInviteClubInfo from '@/apis/club/getInviteClubInfo';
import { JoinClubRequest } from '@/types/api/getClub';

import { useQuery } from '@tanstack/react-query';

const QUERY_KEY = 'GET_INVITE_CLUB_INFO';

const useGetInviteClubInfoQuery = ({ inviteCode }: JoinClubRequest) => {
  const { data: inviteClubInfo } = useQuery({
    queryFn: () => getInviteClubInfo({ inviteCode }),
    queryKey: [QUERY_KEY],
    suspense: true,
  });

  return { inviteClubInfo };
};

export default useGetInviteClubInfoQuery;
