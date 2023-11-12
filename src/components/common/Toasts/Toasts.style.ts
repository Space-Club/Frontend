import styled from '@emotion/styled';

const ToastsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  position: fixed;
  right: 1.5rem;
  top: 1.5rem;
  z-index: 101;

  & > *:not(:last-of-type) {
    margin-bottom: 0.6rem;
  }
`;

export { ToastsContainer };
