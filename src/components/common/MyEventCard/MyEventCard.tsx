import { ClubNameStyled, EventDateStyled, EventTitleStyled, PlaceStyled } from '@/styles/common';
import { EventStatusType } from '@/types/event';

import { useNavigate } from 'react-router-dom';

import Poster from '@components/common/Poster/Poster';

import EventCancelButton from '../EventCancelButton/EventCancelButton';
import EventStateTag from '../EventStateTag/EventStatusTag';
import {
  EventInfoSection,
  EventLeftSection,
  EventRightSection,
  MyEventCardContainer,
} from './MyEventCard.style';

interface MyEventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  posterSrc: string;
  eventId: string;
  eventStatus: EventStatusType;
}

const MyEventCard = ({ posterSrc, eventStatus, eventId, ...props }: MyEventCardProps) => {
  const navigate = useNavigate();
  //TODO: 이벤트 상세 페이지로 이동경로 상수로 설정하기
  return (
    <MyEventCardContainer {...props}>
      <EventLeftSection>
        <Poster posterSrc={posterSrc} width={7} />
        <EventInfoSection>
          <EventTitleStyled
            onClick={() =>
              navigate('', {
                state: {
                  eventId,
                },
              })
            }
          >
            연어전시회
          </EventTitleStyled>
          <EventDateStyled>12/20</EventDateStyled>
          <ClubNameStyled>동아리명</ClubNameStyled>
          <PlaceStyled>국민대학교 미래관 403호</PlaceStyled>
        </EventInfoSection>
      </EventLeftSection>
      <EventRightSection>
        <EventStateTag eventStatus={eventStatus} />
        <EventCancelButton eventId={eventId} />
      </EventRightSection>
    </MyEventCardContainer>
  );
};

export default MyEventCard;
