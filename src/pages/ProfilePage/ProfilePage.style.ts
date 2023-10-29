import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const MyEventSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 53.5625rem;
`;
const MyEventTabContainer = styled.div`
  border-bottom: 1px solid ${Theme.color.tLine};
`;

const MyEventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    padding: 1.875rem 0;
  }
  & > *:not(:last-of-type) {
    border-bottom: 1px solid ${Theme.color.tSeparator};
  }
`;

export { MyEventSection, MyEventTabContainer, MyEventContainer };
