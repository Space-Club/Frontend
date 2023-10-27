import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const MyEventCardContainer = styled.div`
  width: 80%;
  min-width: 30rem;
  display: flex;
  justify-content: space-between;
  border: 0.1rem solid transparent;
  border-image: ${Theme.color.eventCardBackground};
  border-image-slice: 1;
  padding: 1rem;
`;

const EventLeftSection = styled.div`
  width: 29rem;
  min-width: 20rem;
  display: flex;
`;

const EventInfoSection = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 0.3rem 1rem;
`;

const EventRightSection = styled.div`
  width: 5rem;
  min-width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > div {
    margin-bottom: 0.5rem;
  }
`;

export { MyEventCardContainer, EventLeftSection, EventRightSection, EventInfoSection };
