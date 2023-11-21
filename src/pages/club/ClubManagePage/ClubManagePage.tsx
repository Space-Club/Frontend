import ClubSetting from '@/components/ClubSetting/ClubSetting';
import InviteLink from '@/components/InviteLink/InviteLink';
import MemberManager from '@/components/MemberManager/MemberManager';
import Header from '@/components/common/Header/Header';
import Tab from '@/components/common/Tab/Tab';
import { CLUB_TABS } from '@/constants/tab';
import useGetClubQuery from '@/hooks/query/club/useGetClubQuery';

import { useParams } from 'react-router-dom';

const ClubManagePage = () => {
  const { clubId } = useParams();

  if (!clubId) {
    throw new Error('clubId를 URL에서 가져올 수 없습니다.');
  }

  const { clubInfo } = useGetClubQuery({ clubId });
  if (!clubInfo) return null;

  return (
    <>
      <Header>
        <Tab tabItems={CLUB_TABS(clubId)} />
      </Header>
      <MemberManager />
      <InviteLink />
      <ClubSetting clubId={clubId} />
    </>
  );
};

export default ClubManagePage;
