import useGetClubNoticeQuery from '@/hooks/query/club/useGetClubNoticeQuery';

import ClubNotice from '../ClubNotice/ClubNotice';
import Carousel from '../common/CarouselSlider/Carousel';
import { EmptyClubNoticeWrapper } from './ClubNotices.style';

interface ClubNoticesProps {
  clubId: string;
}

const ClubNotices = ({ clubId }: ClubNoticesProps) => {
  const { clubNotices } = useGetClubNoticeQuery({ clubId });

  return (
    <Carousel totalItem={clubNotices.length}>
      {clubNotices.length === 0 ? (
        <EmptyClubNoticeWrapper>공지사항이 없습니다</EmptyClubNoticeWrapper>
      ) : (
        clubNotices.map((clubNotice) => (
          <ClubNotice
            key={clubNotice.id}
            clubId={clubId}
            noticeId={clubNotice.id}
            notice={clubNotice.notice}
          />
        ))
      )}
    </Carousel>
  );
};

export default ClubNotices;
