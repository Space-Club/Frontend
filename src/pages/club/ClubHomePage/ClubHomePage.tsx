import ClubMember from '@/components/ClubMember/ClubMember';
import ClubNotice from '@/components/ClubNotice/ClubNotice';
import Carousel from '@/components/common/CarouselSlider/Carousel';
import ClubBanner from '@/components/common/ClubBanner/ClubBanner';
import Header from '@/components/common/Header/Header';

import { useParams } from 'react-router-dom';

import {
  ClubHomeBottomWrapper,
  ClubHomePageContainer,
  ClubHomeTopWrapper,
  ClubMemberWrapper,
  ClubMiddleWrapper,
  ClubNoticeWrapper,
} from './ClubHomePage.style';

const ClubHomePage = () => {
  const { clubId } = useParams();
  if (!clubId) throw new Error('클럽 ID를 찾을 수 없습니다');

  return (
    <>
      <Header></Header>
      <ClubHomePageContainer>
        <ClubHomeTopWrapper>
          <ClubBanner clubId={clubId} bannerSize="small" />
        </ClubHomeTopWrapper>
        <ClubMiddleWrapper>
          <ClubNoticeWrapper>
            <Carousel totalItem={3}>
              <ClubNotice clubId={clubId} />
              <ClubNotice clubId={clubId} />
              <ClubNotice clubId={clubId} />
            </Carousel>
          </ClubNoticeWrapper>
          <ClubMemberWrapper>
            <ClubMember clubId={clubId} />
          </ClubMemberWrapper>
        </ClubMiddleWrapper>
        <ClubHomeBottomWrapper></ClubHomeBottomWrapper>
      </ClubHomePageContainer>
    </>
  );
};

export default ClubHomePage;
