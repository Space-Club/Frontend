import useGetClubPostDetail from '@/hooks/query/club/useGetClubPostDetail';
import { getStorage } from '@/utils/localStorage';

import Avatar from '../common/Avatar/Avatar';
import Button from '../common/Button/Button';
import {
  ButtonWrapper,
  ClubPostDetailContainer,
  PostAuthorWrapper,
  PostContentStyled,
  PostTitleStyled,
  PostedDateStyled,
} from './ClubPostDetail.style';

interface ClubPostDetailProps {
  clubId: string;
  postId: string;
}

const ClubPostDetail = ({ clubId, postId }: ClubPostDetailProps) => {
  const { clubPostDetail } = useGetClubPostDetail({ clubId, postId });

  if (!clubPostDetail) {
    return null;
  }

  const {
    title,
    content,
    authorId,
    author,
    authorImageUrl,
    postImageUrl,
    createdDate,
    lastModifiedDate,
  } = clubPostDetail;

  const isAuthor = authorId === getStorage('userId');
  const isEdited = createdDate !== lastModifiedDate;
  const postedDate = createdDate.split('T')[0].replaceAll('-', '/');
  const postedTime = createdDate.split('T')[1];

  return (
    <ClubPostDetailContainer>
      {isAuthor && (
        <ButtonWrapper>
          <Button buttonText="수정" outline />
          <Button buttonText="삭제" />
        </ButtonWrapper>
      )}
      <PostAuthorWrapper>
        <Avatar avatarSize="small" profileImageSrc={authorImageUrl} />
        {author}
      </PostAuthorWrapper>
      <PostTitleStyled>{title}</PostTitleStyled>
      {postImageUrl && <img src={postImageUrl} />}
      <PostContentStyled>{content}</PostContentStyled>
      <PostedDateStyled>
        {postedDate} {postedTime} {isEdited && <span>(편집됨)</span>}
      </PostedDateStyled>
    </ClubPostDetailContainer>
  );
};

export default ClubPostDetail;
