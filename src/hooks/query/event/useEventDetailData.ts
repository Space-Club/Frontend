import useGetClubQuery from '@/hooks/query/club/useGetClubQuery';
import useMemberAuth from '@/hooks/query/club/useMemberAuth';

import { useEffect, useState } from 'react';

import useEventDetailQuery from './useEventDetailQuery';

interface UseEventDetailData {
  eventId: string;
}

const useEventDetailData = ({ eventId }: UseEventDetailData) => {
  const [clubId, setClubId] = useState('');
  const { eventDetail, isEventDetailLoading, isEventDetailSuccess } = useEventDetailQuery({
    eventId,
  });

  useEffect(() => {
    if (eventDetail) {
      setClubId(eventDetail.clubId);
    }
  }, [eventDetail]);

  const { clubInfo, refetch: clubInfoRefetch } = useGetClubQuery({
    clubId,
    isEnabled: false,
  });
  const { role, refetch: memberAuthRefetch } = useMemberAuth({
    clubId,
    isEnabled: false,
  });

  useEffect(() => {
    if (clubId) {
      clubInfoRefetch();
      memberAuthRefetch();
    }
  }, [clubId, clubInfoRefetch, memberAuthRefetch]);

  const refetchAll = () => {
    clubInfoRefetch();
    memberAuthRefetch();
  };

  //   if (!eventDetail) throw new Error('이벤트 상세 조회 데이터가 없습니다.');
  //   if (!clubInfo) throw new Error('클럽 데이터가 없습니다.');
  //   if (!role) throw new Error('해당 유저의 권한 데이터가 없습니다.');

  return { eventDetail, isEventDetailLoading, isEventDetailSuccess, clubInfo, role, refetchAll };
};

export default useEventDetailData;
