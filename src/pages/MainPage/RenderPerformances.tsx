import EventCard from '@/components/common/EventCard/EventCard';
import useAllEventsQuery from '@/hooks/query/event/useAllEventsQuery';

import { EventCardWrapperStyled } from './MainPage.style';

const RenderPerformances = () => {
  const { events } = useAllEventsQuery({ pageNumber: 1 });
  //#TODO: 공연만 불러오는 쿼리

  return (
    <EventCardWrapperStyled>
      {events?.map((event) => {
        return (
          <EventCard
            eventId={event.id}
            posterSrc={event.poster}
            eventTitle={event.title}
            eventDate={event.startDate}
            eventTime={event.startTime}
            eventPlace={event.location}
            clubName={event.clubName}
          />
        );
      })}
    </EventCardWrapperStyled>
  );
};

export default RenderPerformances;
