import styled from '@emotion/styled';

const HeaderElementWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  width: 100%;
  height: 100%;
`;

const EventsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 3rem;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 5rem;
`;

export { HeaderElementWrapper, EventsContainer, ButtonWrapper };
