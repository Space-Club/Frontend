import { getStorage } from '@/utils/localStorage';

import { IoIosClose } from 'react-icons/io';
import { MdLock } from 'react-icons/md';

import Avatar from '../common/Avatar/Avatar';
import {
  AuthorInfoWrapper,
  CommentContainer,
  CommentContentStyled,
  CreatedDateStyled,
  DeleteButtonAreaStyled,
  PrivateContentWrapper,
} from './ClubComment.style';

interface ClubCommentProps {
  commentId: string;
  content: string;
  authorId: string;
  author: string;
  authorImageUrl: string;
  createdDate: string;
  isPrivate: boolean;
}

const ClubComment = ({
  commentId,
  content,
  authorId,
  author,
  authorImageUrl,
  createdDate,
  isPrivate,
}: ClubCommentProps) => {
  const isAuthor = authorId === getStorage('userId');

  return (
    <CommentContainer>
      <AuthorInfoWrapper>
        <Avatar avatarSize="small" profileImageSrc={authorImageUrl} />
        <span>{author}</span>
      </AuthorInfoWrapper>
      {isPrivate ? (
        isAuthor ? (
          <CommentContentStyled>{content}</CommentContentStyled>
        ) : (
          <PrivateContentWrapper>
            <MdLock size={'1rem'} />
            <span>'비밀댓글입니다.'</span>
          </PrivateContentWrapper>
        )
      ) : (
        <CommentContentStyled>{content}</CommentContentStyled>
      )}
      <CreatedDateStyled>{createdDate}</CreatedDateStyled>
      <DeleteButtonAreaStyled>
        {isAuthor && (
          <IoIosClose
            size={'1rem'}
            onClick={() => console.log(`댓글 삭제버튼 누름 ${commentId}`)}
          />
        )}
      </DeleteButtonAreaStyled>
    </CommentContainer>
  );
};

export default ClubComment;
