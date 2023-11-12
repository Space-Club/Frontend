import { APPLIED_EVENTS_TAGS } from '@/constants/event';
import { getTimeStamp } from '@/utils/getTimeStamp';

import { useNavigate } from 'react-router-dom';

import Avatar from '../Avatar/Avatar';
import EventStatusTag from '../EventStatusTag/EventTag';
import Poster from '../Poster/Poster';
import {
  ClubInfoWrapperStyle,
  ClubNameStyled,
  ContainerStyled,
  EventDateStyled,
  EventFooterWrapper,
  EventInfoWrapper,
  EventTimeStyled,
  PlaceStyled,
  TitleStyled,
} from './EventCard.style';

interface EventProps {
  eventId: string;
  posterSrc: string;
  eventTitle: string;
  eventDate: string;
  eventTime: string;
  eventPlace: string;
  clubImageSrc?: string;
  clubName: string;
  openStatus?: string;
}

const EventCard = ({
  eventId,
  posterSrc,
  eventTitle,
  eventDate,
  eventTime,
  eventPlace,
  clubImageSrc,
  clubName,
  openStatus,
}: EventProps) => {
  const navigate = useNavigate();
  const timeStamp = getTimeStamp(eventTime);

  return (
    <ContainerStyled onClick={() => navigate(`/event/detail/${eventId}`)}>
      <Poster posterSrc={posterSrc} width={9.5}>
        {openStatus && (
          <EventStatusTag
            eventTag={APPLIED_EVENTS_TAGS[openStatus === 'ALL' ? 'publicEvent' : 'clubOnlyEvent']}
          />
        )}
      </Poster>
      <EventInfoWrapper>
        <div>
          <TitleStyled>{eventTitle}</TitleStyled>
          <EventDateStyled>{eventDate}</EventDateStyled>
          <EventTimeStyled>{timeStamp}</EventTimeStyled>
        </div>
        <EventFooterWrapper>
          <PlaceStyled>{eventPlace}</PlaceStyled>
          <ClubInfoWrapperStyle>
            <Avatar avatarSize="small" profileImageSrc={clubImageSrc} isClub={true} />
            <ClubNameStyled>{clubName}</ClubNameStyled>
          </ClubInfoWrapperStyle>
        </EventFooterWrapper>
      </EventInfoWrapper>
    </ContainerStyled>
  );
};

export default EventCard;
