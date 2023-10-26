import { ClubNameStyled, EventDateStyled, EventTitleStyled, PlaceStyled } from '@/styles/common';

import Poster from '@components/common/Poster/Poster';

import { EventActionSection, EventInfoSection, MyEventCardContainer } from './MyEventCard.style';

interface MyEventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  posterSrc: string;
}

const MyEventCard = ({ posterSrc, ...props }: MyEventCardProps) => {
  return (
    <MyEventCardContainer {...props}>
      <EventInfoSection>
        <Poster posterSrc={posterSrc} />
        <div>
          <EventTitleStyled>제목</EventTitleStyled>
          <EventDateStyled>날짜</EventDateStyled>
          <PlaceStyled>장소</PlaceStyled>
          <ClubNameStyled>동아리명</ClubNameStyled>
        </div>
      </EventInfoSection>
      <EventActionSection></EventActionSection>
    </MyEventCardContainer>
  );
};

export default MyEventCard;
