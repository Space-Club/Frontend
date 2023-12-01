import { APPLIED_EVENTS_TAGS } from '@/constants/event';
import { EventStatus } from '@/types/event';
import { Event } from '@/types/event';

import EventStatusTag from '../EventStatusTag/EventStatusTag';
import {
  AppliedEventTitleStyled,
  EventDescription,
  EventInfoSection,
  SemiBlackFont,
} from './AppliedEventInfo.style';

interface AppliedEventInfoProps
  extends Pick<Event, 'title' | 'startDate' | 'location' | 'clubName'> {
  eventId: string;
  eventStatus: EventStatus;
}

const AppliedEventInfo = ({
  title,
  startDate,
  location,
  clubName,
  eventStatus,
}: AppliedEventInfoProps) => {
  return (
    <EventInfoSection>
      <EventStatusTag eventTag={APPLIED_EVENTS_TAGS[eventStatus]} />
      <AppliedEventTitleStyled>{title}</AppliedEventTitleStyled>
      <EventDescription>
        날짜<SemiBlackFont>{startDate}</SemiBlackFont>
      </EventDescription>
      <EventDescription>
        클럽
        <SemiBlackFont>{clubName}</SemiBlackFont>
      </EventDescription>
      <EventDescription>
        장소
        <SemiBlackFont>{location}</SemiBlackFont>
      </EventDescription>
    </EventInfoSection>
  );
};

export default AppliedEventInfo;
