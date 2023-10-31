import styled from '@emotion/styled';

const EventTitleStyled = styled.div`
  margin-bottom: 3%;
  font-family: 'MainBold';
  font-size: 1.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;

const EventDateStyled = styled.div`
  font-size: 1rem;
`;

const ClubNameStyled = styled.div`
  font-family: 'MainRegular';
  font-size: 0.8rem;
`;

const PlaceStyled = styled.div`
  width: 100%;
  color: grey;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 1rem;
`;

const ellipsisText = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export { EventTitleStyled, EventDateStyled, ClubNameStyled, PlaceStyled, ellipsisText };
