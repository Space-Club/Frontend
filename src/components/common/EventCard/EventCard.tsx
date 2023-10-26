import { useNavigate } from 'react-router-dom';

import {
  ClubNameStyled,
  ContainerStyled,
  EventDateStyled,
  EventFooterWrapper,
  EventInfoWrapper,
  PlaceStyled,
  PosterAreaStyled,
  PosterStyled,
  TitleStyled,
} from './EventCard.style';

interface EventProps {
  eventId: number;
  eventPoster: string;
  eventTitle: string;
  eventDate: string;
  eventPlace: string;
  clubName: string;
}

const EventCard = ({
  eventId,
  eventPoster,
  eventTitle,
  eventDate,
  eventPlace,
  clubName,
}: EventProps) => {
  const navigate = useNavigate();

  return (
    <ContainerStyled onClick={() => navigate(`/event/detail/${eventId}`)}>
      <PosterAreaStyled>
        <PosterStyled src={eventPoster} alt="poster image" />
      </PosterAreaStyled>
      <EventInfoWrapper>
        <div>
          <TitleStyled>{eventTitle}</TitleStyled>
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
