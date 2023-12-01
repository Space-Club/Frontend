import styled from '@emotion/styled';

const AppliedEventCardContainer = styled.div`
  display: flex;
`;

const EventLeftSection = styled.div`
  display: flex;
  width: 29rem;
  min-width: 20rem;
  cursor: pointer;
`;

const EventRightSection = styled.div`
  width: 5rem;
  min-width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export { AppliedEventCardContainer, EventLeftSection, EventRightSection };
