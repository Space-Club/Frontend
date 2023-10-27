import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const MyEventCardContainer = styled.div`
  display: flex;
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
  padding: 0.3rem 1rem;
`;

const EventRightSection = styled.div`
  width: 5rem;
  min-width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SemiBlackFont = styled.div`
  color: ${Theme.color.semiBlack};
  bottom: 0;
  margin-left: 0.2rem;
  font-size: 0.7rem;
  line-height: 1.1rem;
`;

const EventDescription = styled.div`
  position: relative;
  height: 1.2rem;
  font-size: 0.8rem;
  display: flex;
  margin-bottom: 0.1rem;
`;

export {
  MyEventCardContainer,
  EventLeftSection,
  EventRightSection,
  EventInfoSection,
  SemiBlackFont,
  EventDescription,
};
