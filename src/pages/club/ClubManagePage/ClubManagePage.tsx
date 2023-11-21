import ClubSetting from '@/components/ClubSetting/ClubSetting';
import InviteLink from '@/components/InviteLink/InviteLink';
import MemberManager from '@/components/MemberManager/MemberManager';
import Header from '@/components/common/Header/Header';
import Tab from '@/components/common/Tab/Tab';
import { CLUB_TABS } from '@/constants/tab';
import useGetClubQuery from '@/hooks/query/club/useGetClubQuery';

import { useParams } from 'react-router-dom';

import { TabWrapper } from '../ClubHomePage/ClubHomePage.style';
import {
  ClubManagePageContainer,
  ClubManagePageLeftWrapper,
  ClubManagePageRightWrapper,
} from './ClubManagePage.style';

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
        <TabWrapper>
          <Tab tabItems={CLUB_TABS(clubId)} />
        </TabWrapper>
      </Header>
      <ClubManagePageContainer>
        <ClubManagePageLeftWrapper>
          <MemberManager />
        </ClubManagePageLeftWrapper>
        <ClubManagePageRightWrapper>
          <ClubSetting clubId={clubId} />
          <InviteLink />
        </ClubManagePageRightWrapper>
      </ClubManagePageContainer>
    </>
  );
};

export default ClubManagePage;
