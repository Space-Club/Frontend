import ClubComments from '@/components/ClubComments/ClubComments';
import ClubHeader from '@/components/ClubHeader/ClubHeader';
import ClubPostDetail from '@/components/ClubPostDetail/ClubPostDetail';
import WriteClubComment from '@/components/WriteClubComment/WriteClubComment';
import ClubBanner from '@/components/common/ClubBanner/ClubBanner';

import { useParams } from 'react-router-dom';

import {
  ClubCommentWrapper,
  ClubPostDetailPageContainer,
  ClubPostDetailTopWrapper,
  ClubPostWrapper,
} from './ClubPostDetailPage.style';

const ClubPostDetailPage = () => {
  const { clubId, postId } = useParams();
  if (!clubId) {
    throw new Error('클럽 ID를 찾을 수 없습니다');
  } else if (!postId) {
    return null;
  }

  return (
    <>
      <ClubHeader clubId={clubId} />
      <ClubPostDetailPageContainer>
        <ClubPostDetailTopWrapper>
          <ClubBanner withdrawClubButton clubId={clubId} bannerSize="small" />
        </ClubPostDetailTopWrapper>
        <ClubPostWrapper>
          <ClubPostDetail clubId={clubId} postId={postId} />
        </ClubPostWrapper>
        <ClubCommentWrapper>
          <ClubComments postId={postId} />
          <WriteClubComment postId={postId} />
        </ClubCommentWrapper>
      </ClubPostDetailPageContainer>
    </>
  );
};
export default ClubPostDetailPage;
