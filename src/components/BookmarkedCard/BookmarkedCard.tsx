import { BookmarkedEvent } from '@/types/event';

import BookMark from '../common/BookMark/BookMark';
import Poster from '../common/Poster/Poster';
import {
  BookmarkedCardContainer,
  BookmarkedInfoLabelStyled,
  BookmarkedInfoLine,
  BookmarkedInfoStyled,
  BookmarkedInfoWrapper,
  BookmarkedTitleStyled,
} from './BookmarkedCard.style';

const BookmarkedCard = ({
  id: eventId,
  title,
  location,
  clubName,
  posterImageUrl,
  startDate,
  bookmark,
}: BookmarkedEvent) => {
  return (
    <BookmarkedCardContainer>
      <Poster posterSrc={posterImageUrl} width={7.6} />
      <BookmarkedInfoWrapper>
        <BookmarkedTitleStyled>{title}</BookmarkedTitleStyled>
        <BookmarkedInfoLine>
          <BookmarkedInfoLabelStyled>날짜</BookmarkedInfoLabelStyled>
          <BookmarkedInfoStyled>{startDate}</BookmarkedInfoStyled>
        </BookmarkedInfoLine>
        <BookmarkedInfoLine>
          <BookmarkedInfoLabelStyled>장소</BookmarkedInfoLabelStyled>
          <BookmarkedInfoStyled>{location}</BookmarkedInfoStyled>
        </BookmarkedInfoLine>
        <BookmarkedInfoLine>
          <BookmarkedInfoLabelStyled>주최</BookmarkedInfoLabelStyled>
          <BookmarkedInfoStyled>{clubName}</BookmarkedInfoStyled>
        </BookmarkedInfoLine>
      </BookmarkedInfoWrapper>
      <BookMark bookmarked={bookmark} eventId={eventId} />
    </BookmarkedCardContainer>
  );
};

export default BookmarkedCard;
