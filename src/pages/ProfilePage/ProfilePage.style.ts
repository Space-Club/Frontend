import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const ProfileBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5.87rem;
`;

const AppliedEventTabContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${Theme.color.tLine};
`;

const AppliedEventContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  & > * {
    padding: 1.53rem 0;
  }
  & > *:not(:last-of-type) {
    border-bottom: 1px solid ${Theme.color.tSeparator};
  }
`;

const EmptyEventWrapper = styled.div`
  width: 100%;
  height: 20rem;
  color: ${Theme.color.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.2rem 0;
`;

const AppliedEventPaginationWrapper = styled.div`
  margin: 2.4rem 0;
`;

export {
  AppliedEventTabContainer,
  AppliedEventContainer,
  ProfileBottomWrapper,
  AppliedEventPaginationWrapper,
  EmptyEventWrapper,
};
