import { ClubNameStyled, EventDateStyled, EventTitleStyled, PlaceStyled } from '@/styles/common';

import Poster from '@components/common/Poster/Poster';

import {
  EventInfoSection,
  EventLeftSection,
  EventRightSection,
  MyEventCardContainer,
} from './MyEventCard.style';

interface MyEventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  posterSrc: string;
}

const MyEventCard = ({ posterSrc, ...props }: MyEventCardProps) => {
  return (
    <MyEventCardContainer {...props}>
      <EventLeftSection>
        <Poster posterSrc={posterSrc} />
        <EventInfoSection>
          <EventTitleStyled>연어 연주회</EventTitleStyled>
          <EventDateStyled>12/20</EventDateStyled>
          <ClubNameStyled>동아리명</ClubNameStyled>
          <PlaceStyled>국민대학교 미래관 403호</PlaceStyled>
        </EventInfoSection>
      </EventLeftSection>
      <EventRightSection></EventRightSection>
    </MyEventCardContainer>
  );
};

export default MyEventCard;
