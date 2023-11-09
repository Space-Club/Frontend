import { MY_EVENTS_TAGS } from '@/constants/event';
import { PATH } from '@/constants/path';
import { EventTagKey } from '@/types/event';
import { Event } from '@/types/event';

import { useNavigate } from 'react-router-dom';

import EventStatusTag from '../EventTag/EventTag';
import {
  AppliedEventTitleStyled,
  EventDescription,
  EventInfoSection,
  SemiBlackFont,
} from './AppliedEventInfo.style';

interface AppliedEventInfoProps
  extends Pick<Event, 'title' | 'startDate' | 'location' | 'clubName'> {
  eventId: string;
  eventTagKey: EventTagKey;
}

const AppliedEventInfo = ({
  eventId,
  title,
  startDate,
  location,
  clubName,
  eventTagKey,
}: AppliedEventInfoProps) => {
  const navigate = useNavigate();
  return (
    <EventInfoSection>
      <EventStatusTag eventTag={MY_EVENTS_TAGS[eventTagKey]} />
      <AppliedEventTitleStyled onClick={() => navigate(PATH.EVENT.DETAIL + `${eventId}`)}>
        {title}
      </AppliedEventTitleStyled>
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
