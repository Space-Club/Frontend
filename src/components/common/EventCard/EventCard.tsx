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
  eventDate?: string | null;
  eventTime?: string | null;
  formCloseDate?: string | null;
  eventPlace?: string | null;
  clubImageSrc?: string | null;
  clubName: string;
  openStatus?: string;
}

const EventCard = ({
  eventId,
  posterSrc,
  eventTitle,
  eventDate,
  formCloseDate,
  eventPlace,
  clubImageSrc,
  clubName,
  openStatus,
}: EventProps) => {
  const navigate = useNavigate();

  return (
    <ContainerStyled onClick={() => navigate(PATH.EVENT.DETAIL(eventId))}>
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
          <EventDateStyled>
            {eventDate ?? (formCloseDate ? `~${formCloseDate}` : '')}
          </EventDateStyled>
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
