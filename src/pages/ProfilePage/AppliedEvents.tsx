import AppliedEventCard from '@/components/common/AppliedEventCard/AppliedEventCard';
import Pagination from '@/components/common/Pagination/Pagination';
import { PaginationWrapper } from '@/components/common/Pagination/Pagination.style';
import useAppliedEventQuery from '@/hooks/query/event/useAppliedEventQuery';

import { useState } from 'react';

import { AppliedEventContainer } from './AppliedEvents.style';
import { EmptyEventWrapper } from './ProfilePage.style';

const AppliedEvents = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const { events, pageData } = useAppliedEventQuery({ pageNumber: currentPage });

  if (!events || !pageData) return null;

  const { totalPages, size } = pageData;

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <AppliedEventContainer>
        {events ? (
          events.map((event) => (
            <AppliedEventCard
              key={event.id}
              eventId={event.id}
              title={event.title}
              posterImageUrl={event.posterImageUrl}
              startDate={event.startDate}
              location={event.location}
              clubName={event.clubName}
              eventStatus={event.participationStatus}
            />
          ))
        ) : (
          <EmptyEventWrapper>신청한 행사가 없습니다.</EmptyEventWrapper>
        )}
      </AppliedEventContainer>
      <PaginationWrapper>
        <Pagination totalPages={totalPages} size={size} onChangePage={handleChangePage} />
      </PaginationWrapper>
    </>
  );
};

export default AppliedEvents;
