import { PATH } from '@/constants/path';
import Theme from '@/styles/Theme';
import { getDateStamp } from '@/utils/getTimeStamp';

import { IoMdImage } from 'react-icons/io';
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
  const postedDate = getDateStamp(createdDate.split('T')[0]);

  return (
    <BoardContainer>
      <BoardContentWrapper onClick={() => navigate(PATH.CLUB.POST(clubId, postId))}>
        <TitleStyled>
          {title}
          {hasImage && <IoMdImage fill={Theme.color.tSeparator} />}
        </TitleStyled>
        <ContentStyled>{content}</ContentStyled>
      </BoardContentWrapper>
      <BoardInfoWrapper>
        <PostDateWrapper>{postedDate}</PostDateWrapper>
        <AuthorWrapper>
          <Avatar avatarSize="small" profileImageSrc={authorImageUrl} />
          {author}
        </AuthorWrapper>
      </BoardInfoWrapper>
    </BoardContainer>
  );
};

export default ClubPost;
