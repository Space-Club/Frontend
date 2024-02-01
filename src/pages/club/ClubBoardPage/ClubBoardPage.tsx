import ClubHeader from '@/components/ClubHeader/ClubHeader';
import ClubPosts from '@/components/ClubPosts/ClubPosts';
import Button from '@/components/common/Button/Button';
import ClubBanner from '@/components/common/ClubBanner/ClubBanner';
import { PATH } from '@/constants/path';

import { useNavigate, useParams } from 'react-router-dom';

import ClubPostDetailPage from '../ClubPostDetailPage/ClubPostDetailPage';
import {
  ButtonWrapper,
  ClubBoardContentWrapper,
  ClubBoardPageContainer,
  ClubBoardTopWrapper,
} from './ClubBoardPage.style';

const ClubBoardPage = () => {
  const { clubId } = useParams();
  const navigate = useNavigate();
  if (!clubId) throw new Error('클럽 ID를 찾을 수 없습니다');

  return (
    <>
      <ClubHeader clubId={clubId} />
      <ClubBoardPageContainer>
        <ClubBoardTopWrapper>
          <ClubBanner withdrawClubButton clubId={clubId} bannerSize="small" />
        </ClubBoardTopWrapper>
        <ClubBoardContentWrapper>
          <ButtonWrapper>
            <Button
              buttonText="글 작성하기"
              onClick={() => navigate(PATH.CLUB.WRITE_POST(clubId))}
            />
          </ButtonWrapper>
          <ClubPosts clubId={clubId} />
        </ClubBoardContentWrapper>
      </ClubBoardPageContainer>
      <ClubPostDetailPage />
    </>
  );
};

export default ClubBoardPage;
