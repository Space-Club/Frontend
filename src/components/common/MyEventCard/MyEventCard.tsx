import { Event, EventTagKey } from '@/types/event';

import Poster from '@components/common/Poster/Poster';

import EventCancelButton from '../EventCancelButton/EventCancelButton';
import MyEventInfo from '../MyEventInfo/MyEventInfo';
import { EventLeftSection, EventRightSection, MyEventCardContainer } from './MyEventCard.style';

interface MyEventCardProps
  extends Pick<Event, 'title' | 'poster' | 'startDate' | 'location' | 'clubName'> {
  eventId: string;
  eventTagKey: EventTagKey;
}

const MyEventCard = ({
  eventId,
  title,
  poster,
  startDate,
  location,
  clubName,
  eventTagKey,
  ...props
}: MyEventCardProps) => {
  return (
    <MyEventCardContainer {...props}>
      <EventLeftSection>
        <Poster posterSrc={poster} width={7.6} />
        <MyEventInfo
          eventId={eventId}
          title={title}
          startDate={startDate}
          location={location}
          clubName={clubName}
          eventTagKey={eventTagKey}
        />
      </EventLeftSection>
      <EventRightSection>
        <EventCancelButton eventId={eventId} />
      </EventRightSection>
    </MyEventCardContainer>
  );
};

export default MyEventCard;
