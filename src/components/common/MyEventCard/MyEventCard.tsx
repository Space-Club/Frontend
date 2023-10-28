import { Event, EventTagKey } from '@/types/event';

import Poster from '@components/common/Poster/Poster';

import EventCancelButton from '../EventCancelButton/EventCancelButton';
import MyEventInfo from '../MyEventInfo/MyEventInfo';
import { EventLeftSection, EventRightSection, MyEventCardContainer } from './MyEventCard.style';

interface MyEventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  event: Event;
  eventTagKey: EventTagKey;
}

const MyEventCard = ({ event, eventTagKey, ...props }: MyEventCardProps) => {
  const { poster, startDate, id, location, title, clubName } = event;
  return (
    <MyEventCardContainer {...props}>
      <EventLeftSection>
        <Poster posterSrc={poster} width={7} />
        <MyEventInfo
          id={id}
          title={title}
          startDate={startDate}
          location={location}
          clubName={clubName}
          eventTagKey={eventTagKey}
        />
      </EventLeftSection>
      <EventRightSection>
        <EventCancelButton eventId={id} />
      </EventRightSection>
    </MyEventCardContainer>
  );
};

export default MyEventCard;
