import useDeleteClubCommentMutation from '@/hooks/query/club/useDeleteClubCommentMutation';
import Theme from '@/styles/Theme';
import { getDateStamp } from '@/utils/getTimeStamp';
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
  LockIconWrapper,
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
  const { deleteComment } = useDeleteClubCommentMutation();
  const postedDate = getDateStamp(createdDate.split('T')[0]);
  const postedTime = createdDate.split('T')[1];

  return (
    <CommentContainer>
      <AuthorInfoWrapper>
        <Avatar avatarSize="small" profileImageSrc={authorImageUrl} />
        <span>{author}</span>
      </AuthorInfoWrapper>
      {isPrivate ? (
        isAuthor ? (
          <CommentContentStyled>
            <LockIconWrapper>
              <MdLock size={'1rem'} fill={Theme.color.tSeparator} />
            </LockIconWrapper>
            <div>{content}</div>
          </CommentContentStyled>
        ) : (
          <PrivateContentWrapper>
            <MdLock size={'1rem'} fill={Theme.color.tSeparator} />
            <span>'비밀댓글입니다.'</span>
          </PrivateContentWrapper>
        )
      ) : (
        <CommentContentStyled>{content}</CommentContentStyled>
      )}
      <CreatedDateStyled>
        {postedDate} {postedTime}
      </CreatedDateStyled>
      <DeleteButtonAreaStyled>
        {isAuthor && <IoIosClose size={'1rem'} onClick={() => deleteComment({ commentId })} />}
      </DeleteButtonAreaStyled>
    </CommentContainer>
  );
};

export default ClubComment;
