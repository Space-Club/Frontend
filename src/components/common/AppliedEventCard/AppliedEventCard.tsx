import { Event, EventStatus } from '@/types/event';

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
  eventStatus: EventStatus;
}

const AppliedEventCard = ({
  eventId,
  title,
  posterImageUrl,
  startDate,
  location,
  clubName,
  eventStatus,
  ...props
}: AppliedEventCardProps) => {
  const isPossibleCancel = eventStatus === 'PENDING' || eventStatus === 'CONFIRMED';

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
          eventStatus={eventStatus}
        />
      </EventLeftSection>
      <EventRightSection>
        {isPossibleCancel && <EventCancelButton title={title} eventId={eventId} />}
      </EventRightSection>
    </AppliedEventCardContainer>
  );
};

export default AppliedEventCard;
