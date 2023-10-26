import { ClubNameStyled, EventDateStyled, EventTitleStyled, PlaceStyled } from '@/styles/common';

import Poster from '@components/common/Poster/Poster';

import EventStateTag from '../EventStateTag/EventStatusTag';
import {
  EventInfoSection,
  EventLeftSection,
  EventRightSection,
  MyEventCardContainer,
} from './MyEventCard.style';

interface MyEventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  posterSrc: string;
}

const MyEventCard = ({ ...props }: MyEventCardProps) => {
  return (
    <MyEventCardContainer {...props}>
      <EventLeftSection>
        <Poster
          posterSrc={
            'https://s3-eu-west-1.amazonaws.com/blog-ecotree/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg'
          }
        />
        <EventInfoSection>
          <EventTitleStyled>
            연어 연어전시회연어전시회연어전시회연어전시회연어전시회
          </EventTitleStyled>
          <EventDateStyled>12/20</EventDateStyled>
          <ClubNameStyled>동아리명</ClubNameStyled>
          <PlaceStyled>국민대학교 미래관 403호</PlaceStyled>
        </EventInfoSection>
      </EventLeftSection>
      <EventRightSection>
        <EventStateTag eventStatus="cancelled" />
      </EventRightSection>
    </MyEventCardContainer>
  );
};

export default MyEventCard;
