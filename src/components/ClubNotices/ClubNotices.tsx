import useGetClubNoticeQuery from '@/hooks/query/club/useGetClubNoticeQuery';

import ClubNotice from '../ClubNotice/ClubNotice';
import Carousel from '../common/CarouselSlider/Carousel';

interface ClubNoticesProps {
  clubId: string;
}

const ClubNotices = ({ clubId }: ClubNoticesProps) => {
  const { clubNotices } = useGetClubNoticeQuery({ clubId });

  return (
    <Carousel totalItem={clubNotices.length}>
      {clubNotices.map((clubNotice) => (
        <ClubNotice key={clubNotice.id} noticeId={clubNotice.id} notice={clubNotice.notice} />
      ))}
    </Carousel>
  );
};

export default ClubNotices;
