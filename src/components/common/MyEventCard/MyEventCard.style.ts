import styled from '@emotion/styled';

const MyEventCardContainer = styled.div`
  display: flex;
`;

const EventLeftSection = styled.div`
  width: 29rem;
  min-width: 20rem;
  display: flex;
`;

const EventRightSection = styled.div`
  width: 5rem;
  min-width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export { MyEventCardContainer, EventLeftSection, EventRightSection };
