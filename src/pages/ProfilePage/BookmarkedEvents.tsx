import BookmarkedCard from '@/components/BookmarkedCard/BookmarkedCard';
import Pagination from '@/components/common/Pagination/Pagination';
import useGetEventBookMarkQuery from '@/hooks/query/event/useGetEventBookMarkQuery';

import { useState } from 'react';

import { BookmarkedEventsContainer } from './BookmarkedEvents.style';
import { EmptyEventWrapper } from './ProfilePage.style';

const BookmarkedEvents = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const { bookmarks, pageData } = useGetEventBookMarkQuery({
    page: currentPage,
    size: 10,
    sort: 'id',
  });

  if (!bookmarks || !pageData) return null;

  const { totalPages, size } = pageData;

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <BookmarkedEventsContainer>
        {bookmarks.map((bookmark) => {
          return (
            <BookmarkedCard
              key={bookmark.id}
              id={bookmark.id}
              title={bookmark.title}
              location={bookmark.location}
              clubName={bookmark.clubName}
              posterImageUrl={bookmark.posterImageUrl}
              startDate={bookmark.startDate}
              bookmark={bookmark.bookmark}
            />
          );
        })}
      </BookmarkedEventsContainer>
      {!bookmarks ?? <EmptyEventWrapper>북마크한 행사가 없습니다</EmptyEventWrapper>}
      <Pagination totalPages={totalPages} size={size} onChangePage={handleChangePage} />
    </>
  );
};

export default BookmarkedEvents;
