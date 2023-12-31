import { PATH } from '@/constants/path';

import { useNavigate } from 'react-router-dom';

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
  imageUrl?: string;
  postDate: string;
}

const ClubPost = ({
  clubId,
  postId,
  title,
  content,
  author,
  imageUrl,
  postDate,
}: ClubPostProps) => {
  const navigate = useNavigate();
  const hasImage = Boolean(imageUrl);

  return (
    <BoardContainer>
      <BoardContentWrapper onClick={() => navigate(PATH.CLUB.POST(clubId, postId))}>
        <TitleStyled>{title}</TitleStyled>
        {hasImage && <div>image</div>}
        <ContentStyled>{content}</ContentStyled>
      </BoardContentWrapper>
      <BoardInfoWrapper>
        <PostDateWrapper>{postDate}</PostDateWrapper>
        <AuthorWrapper>{author}</AuthorWrapper>
      </BoardInfoWrapper>
    </BoardContainer>
  );
};

export default ClubPost;
