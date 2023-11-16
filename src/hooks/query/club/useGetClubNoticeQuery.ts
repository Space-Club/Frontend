import getClubNotice from '@/apis/club/getClubNotice';
import { GetClubNoticeRequest } from '@/types/api/getClubNotice';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = { CLUB_NOTICE: 'CLUB_NOTICE' };

const useGetClubNoticeQuery = ({ clubId }: GetClubNoticeRequest) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.CLUB_NOTICE, clubId],
    queryFn: () => getClubNotice({ clubId }),
  });

  return data ? { clubNotices: data.notices } : { clubNotices: [] };
};

export default useGetClubNoticeQuery;
