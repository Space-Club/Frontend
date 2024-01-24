import useGetClubCommentsQuery from '@/hooks/query/club/useGetClubCommentsQuery';

import ClubComment from '../ClubComment/ClubComment';
import { CommentCountWrapper, CommentsContainer } from './ClubComments.style';

interface ClubCommentsProps {
  postId: string;
}

const ClubComments = ({ postId }: ClubCommentsProps) => {
  const { clubPostComments, pageData } = useGetClubCommentsQuery({ postId, pageNumber: 0 });
  const totalComment = pageData?.numberOfElements;

  return (
    <CommentsContainer>
      <CommentCountWrapper>{`댓글 ${totalComment}`}</CommentCountWrapper>
      {clubPostComments?.map((comment) => (
        <ClubComment
          key={comment.commentId}
          commentId={comment.commentId}
          authorImageUrl={comment.authorImageUrl}
          authorId={comment.authorId}
          author={comment.author}
          content={comment.content}
          createdDate={comment.createdDate}
          isPrivate={comment.isPrivate}
        />
      ))}
    </CommentsContainer>
  );
};

export default ClubComments;
