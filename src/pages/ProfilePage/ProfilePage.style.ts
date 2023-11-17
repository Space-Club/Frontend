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

const AppliedEventPaginationWrapper = styled.div`
  margin: 2.4rem 0;
`;

export { AppliedEventTabContainer, ProfileBottomWrapper, AppliedEventPaginationWrapper };
