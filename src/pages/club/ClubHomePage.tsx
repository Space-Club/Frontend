import ClubBanner from '@/components/common/ClubBanner/ClubBanner';
import Header from '@/components/common/Header/Header';

import { useParams } from 'react-router-dom';

const ClubHomePage = () => {
  const { clubId } = useParams();
  if (!clubId) throw new Error('클럽 ID를 찾을 수 없습니다');

  return (
    <>
      <Header></Header>
      <ClubBanner clubId={clubId} />
    </>
  );
};

export default ClubHomePage;
