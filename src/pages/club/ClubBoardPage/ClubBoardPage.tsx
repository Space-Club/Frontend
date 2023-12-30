import ClubHeader from '@/components/ClubHeader/ClubHeader';
import ClubPosts from '@/components/ClubPosts/ClubPosts';
import Button from '@/components/common/Button/Button';
import ClubBanner from '@/components/common/ClubBanner/ClubBanner';
import { PATH } from '@/constants/path';

import { useNavigate, useParams } from 'react-router-dom';

import {
  ButtonWrapper,
  ClubBoardContentWrapper,
  ClubBoardPageContainer,
  ClubBoardTopWrapper,
  MyButtonsWrapper,
  MyPostsCommentsButtonStyled,
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
            <MyButtonsWrapper>
              <MyPostsCommentsButtonStyled>내가 쓴 글</MyPostsCommentsButtonStyled>
              <MyPostsCommentsButtonStyled>내가 쓴 댓글</MyPostsCommentsButtonStyled>
            </MyButtonsWrapper>
          </ButtonWrapper>
          <ClubPosts clubId={clubId} />
        </ClubBoardContentWrapper>
      </ClubBoardPageContainer>
    </>
  );
};

export default ClubBoardPage;
