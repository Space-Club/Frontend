import { APPLIED_EVENTS_TAGS } from '@/constants/event';
import { PATH } from '@/constants/path';

import { useNavigate } from 'react-router-dom';

import Avatar from '../Avatar/Avatar';
import EventStatusTag from '../EventStatusTag/EventStatusTag';
import Poster from '../Poster/Poster';
import {
  ClubInfoWrapperStyle,
  ClubNameStyled,
  ContainerStyled,
  EventDateStyled,
  EventFooterWrapper,
  EventInfoWrapper,
  PlaceStyled,
  TitleStyled,
} from './EventCard.style';

interface EventProps {
  eventId: string;
  posterSrc?: string;
  eventTitle: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  clubLogoImageUrl?: string;
  clubName: string;
  openStatus?: string;
  isEnded: boolean;
}

const EventCard = ({
  eventId,
  posterSrc,
  eventTitle,
  startDate,
  endDate,
  location,
  clubLogoImageUrl,
  clubName,
  openStatus,
  isEnded,
}: EventProps) => {
  const navigate = useNavigate();

  return (
    <ContainerStyled onClick={() => navigate(PATH.EVENT.DETAIL(eventId))}>
      <Poster posterSrc={posterSrc} width={9.5} isEnded={isEnded}>
        {openStatus && (
          <EventStatusTag
            eventTag={APPLIED_EVENTS_TAGS[openStatus === 'ALL' ? 'publicEvent' : 'clubOnlyEvent']}
          />
        )}
      </Poster>
      <EventInfoWrapper>
        <div>
          <TitleStyled>{eventTitle}</TitleStyled>
          <EventDateStyled>{endDate ? `~${endDate}` : startDate ? startDate : ''}</EventDateStyled>
        </div>
        <EventFooterWrapper>
          <PlaceStyled>{location}</PlaceStyled>
          <ClubInfoWrapperStyle>
            <Avatar avatarSize="small" profileImageSrc={clubLogoImageUrl} isClub={true} />
            <ClubNameStyled>{clubName}</ClubNameStyled>
          </ClubInfoWrapperStyle>
        </EventFooterWrapper>
      </EventInfoWrapper>
    </ContainerStyled>
  );
};

export default EventCard;
