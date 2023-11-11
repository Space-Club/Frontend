import { Event, EventTagKey } from '@/types/event';

import Poster from '@components/common/Poster/Poster';

import AppliedEventInfo from '../AppliedEventInfo/AppliedEventInfo';
import EventCancelButton from '../EventCancelButton/EventCancelButton';
import {
  AppliedEventCardContainer,
  EventLeftSection,
  EventRightSection,
} from './AppliedEventCard.style';

interface AppliedEventCardProps
  extends Pick<Event, 'title' | 'posterImageUrl' | 'startDate' | 'location' | 'clubName'> {
  eventId: string;
  eventTagKey: EventTagKey;
}

const AppliedEventCard = ({
  eventId,
  title,
  posterImageUrl,
  startDate,
  location,
  clubName,
  eventTagKey,
  ...props
}: AppliedEventCardProps) => {
  return (
    <AppliedEventCardContainer {...props}>
      <EventLeftSection>
        <Poster posterSrc={posterImageUrl} width={7.6} />
        <AppliedEventInfo
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
    </AppliedEventCardContainer>
  );
};

export default AppliedEventCard;
