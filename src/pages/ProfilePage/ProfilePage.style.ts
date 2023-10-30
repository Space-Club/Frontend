import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const ProfilePageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MyEventSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const MyEventTabContainer = styled.div`
  min-width: 53.6rem;
  border-bottom: 1px solid ${Theme.color.tLine};
`;

const MyEventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    padding: 1.53rem 0;
  }
  & > *:not(:last-of-type) {
    border-bottom: 1px solid ${Theme.color.tSeparator};
  }
`;

export { MyEventSection, MyEventTabContainer, MyEventContainer, ProfilePageContainer };
