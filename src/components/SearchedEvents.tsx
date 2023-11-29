import useSearchResultQuery from '@/hooks/query/event/useSearchResultQuery';
import { CommonEmptyEventsWrapper, EventsWrapper } from '@/styles/common';

import { useState } from 'react';

import EventCard from './common/EventCard/EventCard';
import Pagination from './common/Pagination/Pagination';

interface SearchedEventsProps {
  keyword: string | undefined;
}

const SearchedEvents = ({ keyword }: SearchedEventsProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { data, pageData } = useSearchResultQuery({ keyword: keyword ?? '', page: currentPage });
  if (!pageData) {
    return null;
  }
  const { totalPages, size } = pageData;

  return (
    <>
      <EventsWrapper>
        {data?.map(({ id, eventInfo, clubInfo }) => (
          <EventCard
            key={id}
            eventId={id}
            eventTitle={eventInfo.title}
            startDate={eventInfo.startDate}
            endDate={eventInfo.endDate}
            posterSrc={eventInfo.posterImageUrl}
            location={eventInfo.location}
            clubName={clubInfo.name}
            clubLogoImageUrl={clubInfo.logoImageUrl}
            isEnded={eventInfo.isEnded}
          />
        ))}
      </EventsWrapper>
      {data?.length === 0 && (
        <CommonEmptyEventsWrapper>검색결과가 없습니다.</CommonEmptyEventsWrapper>
      )}
      <Pagination
        totalPages={totalPages}
        size={size}
        onChangePage={(page) => setCurrentPage(page)}
        currentPage={currentPage}
      />
    </>
  );
};

export default SearchedEvents;
