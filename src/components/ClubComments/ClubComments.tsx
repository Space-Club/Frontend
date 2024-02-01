import useGetClubCommentsQuery from '@/hooks/query/club/useGetClubCommentsQuery';
import { CommonEmptyEventsWrapper } from '@/styles/common';

import { useState } from 'react';

import ClubComment from '../ClubComment/ClubComment';
import Pagination from '../common/Pagination/Pagination';
import { CommentCountWrapper, CommentsContainer } from './ClubComments.style';

interface ClubCommentsProps {
  postId: string;
}

const ClubComments = ({ postId }: ClubCommentsProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { clubPostComments, pageData } = useGetClubCommentsQuery({
    postId,
    pageNumber: currentPage,
  });
  if (!pageData) {
    return null;
  }
  const { totalPages, size, totalElements } = pageData;

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <CommentsContainer>
        <CommentCountWrapper>{`댓글 ${totalElements}`}</CommentCountWrapper>
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
        {totalElements === 0 && (
          <CommonEmptyEventsWrapper>댓글이 없습니다.</CommonEmptyEventsWrapper>
        )}
      </CommentsContainer>
      <Pagination
        totalPages={totalPages}
        size={size}
        onChangePage={handleChangePage}
        currentPage={currentPage}
      />
    </>
  );
};

export default ClubComments;
