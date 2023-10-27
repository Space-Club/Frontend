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

const MyEventTitleStyled = styled.div`
  font-size: 1rem;
  line-height: 1.2rem;
  margin: 0.8rem 0;
`;

const EventInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 1rem;
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
  margin: 0.1rem 0 0 0.2rem;
  font-size: 0.7rem;
`;

const EventDescription = styled.div`
  display: flex;
  align-items: center;
  position: relative;
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
  MyEventTitleStyled,
};
