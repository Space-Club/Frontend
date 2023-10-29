import { ClubNameStyled, EventDateStyled, EventTitleStyled, PlaceStyled } from '@/styles/common';

import { useNavigate } from 'react-router-dom';

import Poster from '../Poster/Poster';
import { ContainerStyled, EventFooterWrapper, EventInfoWrapper } from './EventCard.style';

interface EventProps {
  eventId: string;
  posterSrc: string;
  eventTitle: string;
  eventDate: string;
  eventPlace: string;
  clubName: string;
}

const EventCard = ({
  eventId,
  posterSrc,
  eventTitle,
  eventDate,
  eventPlace,
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
        </div>
        <EventFooterWrapper>
          <PlaceStyled>{eventPlace}</PlaceStyled>
          <ClubNameStyled>{clubName}</ClubNameStyled>
        </EventFooterWrapper>
      </EventInfoWrapper>
    </ContainerStyled>
  );
};

export default EventCard;
