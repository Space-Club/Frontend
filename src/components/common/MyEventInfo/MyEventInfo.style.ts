import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const EventDescription = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 0.8rem;
  display: flex;
  margin-bottom: 0.1rem;
`;

const EventInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 1rem;
`;

const MyEventTitleStyled = styled.div`
  font-size: 1rem;
  line-height: 1.2rem;
  margin: 0.8rem 0;
`;

const SemiBlackFont = styled.div`
  color: ${Theme.color.semiBlack};
  bottom: 0;
  margin: 0.1rem 0 0 0.2rem;
  font-size: 0.7rem;
`;

export { EventDescription, EventInfoSection, MyEventTitleStyled, SemiBlackFont };
