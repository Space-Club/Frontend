import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const ProfileBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 50rem;
`;

const AppliedEventTabContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${Theme.color.tLine};
  margin-bottom: 1.5rem;
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
  color: ${Theme.color.white};
  background-color: ${Theme.color.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.2rem 0;
`;

const DeleteUserButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-right: 1rem;
  justify-content: flex-end;
`;

export {
  AppliedEventTabContainer,
  AppliedEventContainer,
  ProfileBottomWrapper,
  EmptyEventWrapper,
  DeleteUserButtonWrapper,
};
