import ClubHeader from '@/components/ClubHeader/ClubHeader';
import Button from '@/components/common/Button/Button';
import ClubBanner from '@/components/common/ClubBanner/ClubBanner';

import { useParams } from 'react-router-dom';

import {
  ButtonWrapper,
  ClubPostDetailPageContainer,
  ClubPostDetailTopWrapper,
  ClubPostWrapper,
} from './ClubPostDetailPage.style';

const ClubPostDetailPage = () => {
  const { clubId } = useParams();
  if (!clubId) throw new Error('클럽 ID를 찾을 수 없습니다');

  return (
    <>
      <ClubHeader clubId={clubId} />
      <ClubPostDetailPageContainer>
        <ClubPostDetailTopWrapper>
          <ClubBanner withdrawClubButton clubId={clubId} bannerSize="small" />
        </ClubPostDetailTopWrapper>
        <ClubPostWrapper>
          <ButtonWrapper>
            <Button buttonText="수정" outline />
            <Button buttonText="삭제" />
          </ButtonWrapper>
        </ClubPostWrapper>
      </ClubPostDetailPageContainer>
    </>
  );
};
export default ClubPostDetailPage;
