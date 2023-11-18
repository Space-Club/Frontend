import { BookmarkedEvent } from '@/types/event';

import BookMark from '../common/BookMark/BookMark';
import Poster from '../common/Poster/Poster';
import {
  BookmarkedCardContainer,
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
          날짜 <BookmarkedInfoStyled>{startDate}</BookmarkedInfoStyled>
        </BookmarkedInfoLine>
        <BookmarkedInfoLine>
          장소<BookmarkedInfoStyled>{location}</BookmarkedInfoStyled>
        </BookmarkedInfoLine>
        <BookmarkedInfoLine>
          주최<BookmarkedInfoStyled>{clubName}</BookmarkedInfoStyled>
        </BookmarkedInfoLine>
      </BookmarkedInfoWrapper>
      <BookMark bookmarked={bookmark} eventId={eventId} />
    </BookmarkedCardContainer>
  );
};

export default BookmarkedCard;
