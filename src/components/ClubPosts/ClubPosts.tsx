import useGetClubPostsQuery from '@/hooks/query/club/useGetClubPostsQuery';

import { useState } from 'react';

import ClubPost from '../ClubPost/ClubPost';
import Pagination from '../common/Pagination/Pagination';
import { PostsContainer } from './ClubPosts.style';

interface ClubPostsProps {
  clubId: string;
}

const ClubPosts = ({ clubId }: ClubPostsProps) => {
  const [currentPage, setCurrentPage] = useState(0);

  const { posts, pageData } = useGetClubPostsQuery({ clubId, pageNumber: currentPage });

  if (!pageData) {
    return null;
  }

  const { totalPages, size } = pageData;

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <PostsContainer>
        {posts?.map(({ postId, title, content, author, imageUrl, postDate }) => (
          <ClubPost
            key={postId}
            clubId={clubId}
            postId={postId}
            title={title}
            content={content}
            author={author}
            imageUrl={imageUrl}
            postDate={postDate}
          />
        ))}
      </PostsContainer>
      <Pagination
        totalPages={totalPages}
        size={size}
        onChangePage={handleChangePage}
        currentPage={currentPage}
      />
    </>
  );
};

export default ClubPosts;
