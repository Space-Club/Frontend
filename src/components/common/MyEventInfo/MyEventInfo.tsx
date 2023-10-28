import { MY_EVENTS_TAGS } from '@/constants/event';
import { PATH } from '@/constants/path';
import { EventTagKey } from '@/types/event';
import { Event } from '@/types/event';

import { useNavigate } from 'react-router-dom';

import EventStatusTag from '../EventStateTag/EventStatusTag';
import {
  EventDescription,
  EventInfoSection,
  MyEventTitleStyled,
  SemiBlackFont,
} from './MyEventInfo.style';

interface MyEventInfoProps extends Omit<Event, 'poster' | 'startTime' | 'clubImage'> {
  eventTagKey: EventTagKey;
}

const MyEventInfo = ({
  id,
  title,
  startDate,
  location,
  clubName,
  eventTagKey,
}: MyEventInfoProps) => {
  const navigate = useNavigate();
  return (
    <EventInfoSection>
      <EventStatusTag eventTag={MY_EVENTS_TAGS[eventTagKey]} />
      <MyEventTitleStyled onClick={() => navigate(PATH.EVENT.DETAIL + `${id}`)}>
        {title}
      </MyEventTitleStyled>
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

export default MyEventInfo;
