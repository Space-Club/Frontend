import ClubBanner from '@/components/common/ClubBanner/ClubBanner';
import Header from '@/components/common/Header/Header';
import Tab from '@/components/common/Tab/Tab';
import { CLUB_MANAGER_TABS } from '@/constants/club';

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
  //TODO: pathname에 따라 클럽홈/행사/관리 컴포넌트 보여주기

  //TODO: clubId를 Tab에 넘겨야하나?
  return (
    <>
      <Header>
        <TabWrapper>
          <Tab tabItems={CLUB_MANAGER_TABS} />
        </TabWrapper>
      </Header>
      <ClubHomePageContainer>
        <ClubHomeTopWrapper>
          <ClubBanner clubId={clubId} bannerSize="small" />
        </ClubHomeTopWrapper>
        <ClubHomeMiddleMemberWrapper></ClubHomeMiddleMemberWrapper>
        <ClubHomeBottomWrapper></ClubHomeBottomWrapper>
      </ClubHomePageContainer>
    </>
  );
};

export default ClubHomePage;
