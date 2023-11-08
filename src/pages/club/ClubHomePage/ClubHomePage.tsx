import ClubBanner from '@/components/common/ClubBanner/ClubBanner';
import Header from '@/components/common/Header/Header';

import { useParams } from 'react-router-dom';

import {
  ClubHomeBottomWrapper,
  ClubHomeMiddleMemberWrapper,
  ClubHomePageContainer,
  ClubHomeTopWrapper,
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
        <ClubHomeMiddleMemberWrapper></ClubHomeMiddleMemberWrapper>
        <ClubHomeBottomWrapper></ClubHomeBottomWrapper>
      </ClubHomePageContainer>
    </>
  );
};

export default ClubHomePage;
