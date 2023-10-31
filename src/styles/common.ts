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

const sideBarScrollAreaStyled = styled.div`
  &::-webkit-scrollbar {
    width: 0.3rem;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(239, 239, 244, 0.2);
    border-radius: 0.75rem;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  }
  &::-webkit-scrollbar-track {
    border-radius: 0.75rem;
    background: rgba(239, 239, 244, 0.1);
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export {
  EventTitleStyled,
  EventDateStyled,
  ClubNameStyled,
  PlaceStyled,
  ellipsisText,
  sideBarScrollAreaStyled,
};
