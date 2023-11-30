import useClubEventsQuery from '@/hooks/query/club/useClubEventsQuery';
import { CommonEmptyEventsWrapper, EventsWrapper } from '@/styles/common';

import { useState } from 'react';

import EventCard from '../common/EventCard/EventCard';
import Pagination from '../common/Pagination/Pagination';
import { EmptyClubEvent } from './ClubEvent.style';

interface ClubEventsProps {
  clubId: string;
}

const ClubEvents = ({ clubId }: ClubEventsProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { clubEvents, pageData } = useClubEventsQuery({ clubId, pageNumber: currentPage });
  if (!pageData) {
    return null;
  }
  const { totalPages, size } = pageData;

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <EventsWrapper>
        {clubEvents?.map(({ id, eventInfo, clubInfo }) => (
          <EventCard
            key={id}
            eventId={id}
            posterSrc={eventInfo.posterImageUrl}
            eventTitle={eventInfo.title}
            startDate={eventInfo.startDate}
            endDate={eventInfo.endDate}
            location={eventInfo.location}
            clubLogoImageUrl={clubInfo.logoImageUrl}
            clubName={clubInfo.name}
            openStatus={eventInfo.openStatus}
            isEnded={eventInfo.isEnded}
          />
        ))}
      </EventsWrapper>
      {clubEvents?.length === 0 && (
        <CommonEmptyEventsWrapper>
          <EmptyClubEvent>클럽에서 생성한 행사가 없습니다!</EmptyClubEvent>
        </CommonEmptyEventsWrapper>
      )}
      <Pagination
        totalPages={totalPages}
        size={size}
        onChangePage={handleChangePage}
        currentPage={currentPage}
      />
    </>
  );
};

export default ClubEvents;
