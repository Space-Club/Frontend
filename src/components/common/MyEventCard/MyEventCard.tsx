import { PATH } from '@/constants/path';
import { EventTitleStyled } from '@/styles/common';
import { EventStatusType } from '@/types/event';

import { useNavigate } from 'react-router-dom';

import Poster from '@components/common/Poster/Poster';

import EventCancelButton from '../EventCancelButton/EventCancelButton';
import EventStatusTag from '../EventStateTag/EventStatusTag';
import {
  EventDescription,
  EventInfoSection,
  EventLeftSection,
  EventRightSection,
  MyEventCardContainer,
  SemiBlackFont,
} from './MyEventCard.style';

interface MyEventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  eventStatus: EventStatusType;
  eventId: string;
  posterSrc: string;
  eventTitle: string;
  eventDate: string;
  eventPlace: string;
  clubName: string;
}

const MyEventCard = ({
  posterSrc,
  eventStatus,
  eventId,
  eventDate,
  eventPlace,
  eventTitle,
  clubName,
  ...props
}: MyEventCardProps) => {
  const navigate = useNavigate();
  return (
    <MyEventCardContainer {...props}>
      <EventLeftSection>
        <Poster posterSrc={posterSrc} width={7} />
        <EventInfoSection>
          <EventStatusTag eventStatus={eventStatus} />
          <EventTitleStyled onClick={() => navigate(PATH.EVENT.DETAIL + `${eventId}`)}>
            {eventTitle}
          </EventTitleStyled>
          <EventDescription>
            날짜<SemiBlackFont>{eventDate}</SemiBlackFont>
          </EventDescription>
          <EventDescription>
            클럽
            <SemiBlackFont>{clubName}</SemiBlackFont>
          </EventDescription>
          <EventDescription>
            장소
            <SemiBlackFont>{eventPlace}</SemiBlackFont>
          </EventDescription>
        </EventInfoSection>
      </EventLeftSection>
      <EventRightSection>
        <EventCancelButton eventId={eventId} />
      </EventRightSection>
    </MyEventCardContainer>
  );
};

export default MyEventCard;
