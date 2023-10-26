import styled from '@emotion/styled';

const MyEventCardContainer = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  background-color: aliceblue;
`;

const EventInfoSection = styled.div`
  width: 29rem;
  min-width: 20rem;
  height: 100%;
  display: flex;
  background-color: antiquewhite;
`;

const EventActionSection = styled.div`
  width: 29rem;
  min-width: 20rem;
  height: 100%;
  display: flex;
  background-color: aqua;
`;

export { MyEventCardContainer, EventInfoSection, EventActionSection };
