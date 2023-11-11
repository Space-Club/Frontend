import ClubMember from '@/components/ClubMember/ClubMember';
import ClubNotice from '@/components/ClubNotice/ClubNotice';
import CreateNoticeButton from '@/components/CreateNoticeButton/CreateNoticeButton';
import Carousel from '@/components/common/CarouselSlider/Carousel';
import ClubBanner from '@/components/common/ClubBanner/ClubBanner';
import Header from '@/components/common/Header/Header';
import Tab from '@/components/common/Tab/Tab';
import { CLUB_TABS } from '@/constants/tab';

import { useParams } from 'react-router-dom';

import {
  ClubHomeBottomWrapper,
  ClubHomePageContainer,
  ClubHomeTopWrapper,
  ClubMemberTextedWrapper,
  ClubMemberWrapper,
  ClubMiddleWrapper,
  ClubNoticeTextStyled,
  ClubNoticeTextedWrapper,
  ClubNoticeWrapper,
  TabWrapper,
} from './ClubHomePage.style';

const ClubHomePage = () => {
  const { clubId } = useParams();
  if (!clubId) throw new Error('클럽 ID를 찾을 수 없습니다');
  //TODO: pathname에 따라 클럽홈/행사/관리 컴포넌트 보여주기

  return (
    <>
      <Header>
        <TabWrapper>
          <Tab tabItems={CLUB_TABS(clubId)} />
        </TabWrapper>
      </Header>
      <ClubHomePageContainer>
        <ClubHomeTopWrapper>
          <ClubBanner clubId={clubId} bannerSize="small" />
        </ClubHomeTopWrapper>
        <ClubMiddleWrapper>
          <ClubNoticeTextedWrapper>
            <ClubNoticeTextStyled>
              공지사항
              <CreateNoticeButton clubId={clubId} />
            </ClubNoticeTextStyled>
            <ClubNoticeWrapper>
              <Carousel totalItem={3}>
                <ClubNotice clubId={clubId} />
                <ClubNotice clubId={clubId} />
                <ClubNotice clubId={clubId} />
              </Carousel>
            </ClubNoticeWrapper>
          </ClubNoticeTextedWrapper>
          <ClubMemberTextedWrapper>
            <ClubNoticeTextStyled>멤버</ClubNoticeTextStyled>
            <ClubMemberWrapper>
              <ClubMember clubId={clubId} />
            </ClubMemberWrapper>
          </ClubMemberTextedWrapper>
        </ClubMiddleWrapper>
        <ClubHomeBottomWrapper></ClubHomeBottomWrapper>
      </ClubHomePageContainer>
    </>
  );
};

export default ClubHomePage;
