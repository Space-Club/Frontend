import useAllEventsQuery from '@/hooks/query/event/useAllEventsQuery';
import { EventsWrapper } from '@/styles/common';

import { useEffect, useState } from 'react';

import EventCard from './common/EventCard/EventCard';
import Pagination from './common/Pagination/Pagination';

interface MainEventsProps {
  pathname: string;
}

const MainEvents = ({ pathname }: MainEventsProps) => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setCurrentPage(0);
  }, [pathname]);

  const { events, pageData } = useAllEventsQuery(
    {
      pageNumber: currentPage,
      category: pathname === '/' ? 'SHOW' : pathname === '/events' ? 'PROMOTION' : 'RECRUITMENT',
    },
    pathname,
  );

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
        {events?.map(({ id, eventInfo, clubInfo }) => {
          return (
            <EventCard
              key={id}
              eventId={id}
              posterSrc={eventInfo.posterImageUrl}
              eventTitle={eventInfo.title}
              startDate={eventInfo.startDate}
              endDate={eventInfo.endDate}
              location={eventInfo.location}
              isEnded={eventInfo.isEnded}
              clubName={clubInfo.name}
              clubLogoImageUrl={clubInfo.logoImageUrl}
              isLazy={true}
            />
          );
        })}
      </EventsWrapper>
      <Pagination
        totalPages={totalPages}
        size={size}
        onChangePage={handleChangePage}
        currentPage={currentPage}
      />
    </>
  );
};

export default MainEvents;
