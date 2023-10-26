import styled from '@emotion/styled';

const ContainerStyled = styled.div`
  display: flex;
  width: 25rem;
  height: 17rem;
  font-family: 'MainThin';
  cursor: pointer;
  transition: transform 0.3s ease;
`;

const EventInfoWrapper = styled.div`
  width: 13rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 3%;
`;

const EventFooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  height: 20%;
  margin-right: 3%;
`;

export { ContainerStyled, EventInfoWrapper, EventFooterWrapper };
