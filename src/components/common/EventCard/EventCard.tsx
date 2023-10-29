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

interface EventProps {
  eventId: number;
  eventPoster: string;
  eventTitle: string;
  eventDate: string;
  eventTime: string;
  eventPlace: string;
  clubImageSrc?: string;
  clubName: string;
}

const EventCard = ({
  eventId,
  eventPoster,
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
      <PosterAreaStyled>
        <img src={eventPoster} alt="poster image" />
      </PosterAreaStyled>
      <EventInfoWrapper>
        <div>
          <TitleStyled>{eventTitle}</TitleStyled>
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
