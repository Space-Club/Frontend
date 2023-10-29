import { useNavigate } from 'react-router-dom';

import Avatar from '../Avatar/Avatar';
import {
  ClubInfoWrapperStyle,
  ClubNameStyled,
  ContainerStyled,
  EventDateStyled,
  EventFooterWrapper,
  EventInfoWrapper,
  PlaceStyled,
  PosterAreaStyled,
  TitleStyled,
} from './EventCard.style';

interface EventProps {
  eventId: number;
  eventPoster: string;
  eventTitle: string;
  eventDate: string;
  eventPlace: string;
  clubImageSrc?: string;
  clubName: string;
}

const EventCard = ({
  eventId,
  eventPoster,
  eventTitle,
  eventDate,
  eventPlace,
  clubImageSrc,
  clubName,
}: EventProps) => {
  const navigate = useNavigate();

  return (
    <ContainerStyled onClick={() => navigate(`/event/detail/${eventId}`)}>
      <PosterAreaStyled>
        <img src={eventPoster} alt="poster image" />
      </PosterAreaStyled>
      <EventInfoWrapper>
        <div>
          <TitleStyled>{eventTitle}</TitleStyled>
          <EventDateStyled>{eventDate}</EventDateStyled>
        </div>
        <EventFooterWrapper>
          <PlaceStyled>{eventPlace}</PlaceStyled>
          <ClubInfoWrapperStyle>
            <Avatar avatarShape="small" profileImageSrc={clubImageSrc} />
            <ClubNameStyled>{clubName}</ClubNameStyled>
          </ClubInfoWrapperStyle>
        </EventFooterWrapper>
      </EventInfoWrapper>
    </ContainerStyled>
  );
};

export default EventCard;
