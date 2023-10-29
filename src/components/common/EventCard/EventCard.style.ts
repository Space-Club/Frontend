import styled from '@emotion/styled';

const ContainerStyled = styled.div`
  display: flex;
  width: 20.3rem;
  height: 13.3rem;
  font-family: 'MainThin';
  margin-bottom: 5%;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const PosterAreaStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
`;

const EventInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 3%;
  word-break: break-all;
`;

const TitleStyled = styled.div`
  padding-bottom: 3%;
  font-family: 'MainBold';
  font-size: 1.5rem;
`;

const EventDateStyled = styled.div`
  font-size: 1rem;
`;

const EventFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20%;
  margin-right: 3%;
`;

const PlaceStyled = styled.div`
  color: grey;
  font-size: 1rem;
`;

const ClubInfoWrapperStyle = styled.div`
  display: flex;
  align-items: center;
`;

const ClubNameStyled = styled.div`
  font-family: 'MainRegular';
  font-size: 0.8rem;
`;

export {
  ContainerStyled,
  PosterAreaStyled,
  EventInfoWrapper,
  TitleStyled,
  EventDateStyled,
  EventFooterWrapper,
  PlaceStyled,
  ClubInfoWrapperStyle,
  ClubNameStyled,
};
