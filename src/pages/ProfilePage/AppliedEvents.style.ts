import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

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

export { AppliedEventContainer };
