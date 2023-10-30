import { ClubNameStyled, EventDateStyled, EventTitleStyled, PlaceStyled } from '@/styles/common';

import { useNavigate } from 'react-router-dom';

import Avatar from '../Avatar/Avatar';
import {
  ClubInfoWrapperStyle,
  ClubNameStyled,
  ContainerStyled,
  EventDateStyled,
  EventFooterWrapper,
  EventInfoWrapper,
  EventTimeStyled,
  PlaceStyled,
  PosterAreaStyled,
  TitleStyled,
} from './EventCard.style';
import Poster from '../Poster/Poster';

interface EventProps {
  eventId: number;
  posterSrc: string;
  eventTitle: string;
  eventDate: string;
  eventTime: string;
  eventPlace: string;
  clubImageSrc?: string;
  clubName: string;
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
}: EventProps) => {
  const navigate = useNavigate();

  return (
    <ContainerStyled onClick={() => navigate(`/event/detail/${eventId}`)}>
      <Poster posterSrc={posterSrc} />
      <EventInfoWrapper>
        <div>
          <EventTitleStyled>{eventTitle}</EventTitleStyled>
          <EventDateStyled>{eventDate}</EventDateStyled>
          <EventTimeStyled>{eventTime}</EventTimeStyled>
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
