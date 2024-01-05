import ClubHeader from '@/components/ClubHeader/ClubHeader';
import ClubPostDetail from '@/components/ClubPostDetail/ClubPostDetail';
import ClubBanner from '@/components/common/ClubBanner/ClubBanner';

import { useParams } from 'react-router-dom';

import {
  ClubPostDetailPageContainer,
  ClubPostDetailTopWrapper,
  ClubPostWrapper,
} from './ClubPostDetailPage.style';

const ClubPostDetailPage = () => {
  const { clubId, postId } = useParams();
  if (!clubId) {
    throw new Error('클럽 ID를 찾을 수 없습니다');
  } else if (!postId) {
    return null; //#TODO: 게시물 찾을 수 없다는 모달창 띄우고 전 페이지로 이동
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
      </ClubPostDetailPageContainer>
    </>
  );
};
export default ClubPostDetailPage;
