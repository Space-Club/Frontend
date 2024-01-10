import { PATH } from '@/constants/path';

import { useNavigate } from 'react-router-dom';

import Avatar from '../common/Avatar/Avatar';
import {
  AuthorWrapper,
  BoardContainer,
  BoardContentWrapper,
  BoardInfoWrapper,
  ContentStyled,
  PostDateWrapper,
  TitleStyled,
} from './ClubPost.style';

interface ClubPostProps {
  clubId: string;
  postId: string;
  title: string;
  content: string;
  author: string;
  authorImageUrl?: string;
  postImageUrl?: string;
  createdDate: string;
}

const ClubPost = ({
  clubId,
  postId,
  title,
  content,
  author,
  authorImageUrl,
  postImageUrl,
  createdDate,
}: ClubPostProps) => {
  const navigate = useNavigate();
  const hasImage = Boolean(postImageUrl);

  return (
    <BoardContainer>
      <BoardContentWrapper onClick={() => navigate(PATH.CLUB.POST(clubId, postId))}>
        <TitleStyled>{title}</TitleStyled>
        {hasImage && <div>image</div>}
        <ContentStyled>{content}</ContentStyled>
      </BoardContentWrapper>
      <BoardInfoWrapper>
        <PostDateWrapper>{createdDate}</PostDateWrapper>
        <Avatar avatarSize="small" profileImageSrc={authorImageUrl} />
        <AuthorWrapper>{author}</AuthorWrapper>
      </BoardInfoWrapper>
    </BoardContainer>
  );
};

export default ClubPost;
