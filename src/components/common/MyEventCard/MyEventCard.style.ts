import styled from '@emotion/styled';

const MyEventCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const EventLeftSection = styled.div`
  width: 29rem;
  min-width: 20rem;
  height: 100%;
  display: flex;
`;

const EventInfoSection = styled.div`
  flex-grow: 1;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  > div {
    margin-bottom: 1rem;
  }
`;

const EventRightSection = styled.div`
  width: 29rem;
  min-width: 20rem;
  height: 100%;
  display: flex;
`;

export { MyEventCardContainer, EventLeftSection, EventRightSection, EventInfoSection };
