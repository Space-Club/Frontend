import styled from '@emotion/styled';

const ContainerStyled = styled.div`
  display: flex;
  width: 20.3rem;
  height: 13.3rem;
  cursor: pointer;
`;

const PosterAreaStyled = styled.div`
  display: flex;
  object-fit: cover;
`;

const EventInfoWrapper = styled.div`
  width: 13rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 3%;
  word-break: break-all;
`;

const EventDateStyled = styled.div`
  padding-bottom: 2%;
  font-size: 1rem;
`;

const EventTimeStyled = styled.div`
  font-size: 1rem;
`;

const EventFooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 23%;
  margin-right: 3%;
`;

const PlaceStyled = styled.div`
  color: grey;
  font-size: 1rem;
`;

const ClubInfoWrapperStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const ClubNameStyled = styled.div`
  font-family: 'MainRegular';
  font-size: 0.8rem;
`;

export {
  ContainerStyled,
  PosterAreaStyled,
  EventInfoWrapper,
  EventDateStyled,
  EventTimeStyled,
  EventFooterWrapper,
  PlaceStyled,
  ClubInfoWrapperStyle,
  ClubNameStyled,
};
