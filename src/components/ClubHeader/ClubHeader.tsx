import { CLUB_MANAGER_TABS, CLUB_MEMBER_TABS } from '@/constants/tab';
import useMemberAuth from '@/hooks/query/club/useMemberAuth';
import { TabWrapper } from '@/styles/common';

import Header from '../common/Header/Header';
import Tab from '../common/Tab/Tab';

interface ClubHeaderProps {
  clubId: string;
}

const ClubHeader = ({ clubId }: ClubHeaderProps) => {
  const { data } = useMemberAuth({ clubId });

  if (!data) return null;

  return (
    <Header>
      <TabWrapper>
        <Tab
          tabItems={data.role === 'MANAGER' ? CLUB_MANAGER_TABS(clubId) : CLUB_MEMBER_TABS(clubId)}
        />
      </TabWrapper>
    </Header>
  );
};

export default ClubHeader;
