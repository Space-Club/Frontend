import ClubBanner from '@/components/common/ClubBanner/ClubBanner';
import Header from '@/components/common/Header/Header';
import Tab from '@/components/common/Tab/Tab';
import { CLUB_TABS } from '@/constants/club';
import { TabContextProvider } from '@/context/TabContext';

import { useParams } from 'react-router-dom';

import {
  ClubHomeBottomWrapper,
  ClubHomeMiddleMemberWrapper,
  ClubHomePageContainer,
  ClubHomeTopWrapper,
  TabWrapper,
} from './ClubHomePage.style';

const ClubHomePage = () => {
  const { clubId } = useParams();
  if (!clubId) throw new Error('클럽 ID를 찾을 수 없습니다');

  return (
    <>
      <TabContextProvider>
        <Header>
          <TabWrapper>
            <Tab tabItems={CLUB_TABS} />
          </TabWrapper>
        </Header>
        <ClubHomePageContainer>
          <ClubHomeTopWrapper>
            <ClubBanner clubId={clubId} bannerSize="small" />
          </ClubHomeTopWrapper>
          <ClubHomeMiddleMemberWrapper></ClubHomeMiddleMemberWrapper>
          <ClubHomeBottomWrapper></ClubHomeBottomWrapper>
        </ClubHomePageContainer>
      </TabContextProvider>
    </>
  );
};

export default ClubHomePage;
