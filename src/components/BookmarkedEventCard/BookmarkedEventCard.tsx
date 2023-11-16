import { EventTitleStyled, PlaceStyled } from '@/styles/common';
import { BookmarkedEvent } from '@/types/event';

import Poster from '../common/Poster/Poster';

//TODO: 북마크 버튼 인재님이 주시면 id,bookmark prop으로 주기
const BookmarkedEventCard = ({
  id: eventId, //eslint-disable-line
  title,
  location,
  clubName,
  posterImageUrl,
  startDate,
  bookmark, //eslint-disable-line
}: BookmarkedEvent) => {
  return (
    <>
      <Poster posterSrc={posterImageUrl} width={7.6} />
      <EventTitleStyled>{title}</EventTitleStyled>
      날짜<PlaceStyled>{startDate}</PlaceStyled>
      장소<PlaceStyled>{location}</PlaceStyled>
      주최<PlaceStyled>{clubName}</PlaceStyled>
    </>
  );
};

export default BookmarkedEventCard;
