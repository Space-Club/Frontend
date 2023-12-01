import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Content = styled.div<{ isSideNavOpen: boolean }>`
  width: calc(100%);
  padding: 0 2rem;
  min-width: 35rem;
  margin: 0 auto;
  margin-left: ${({ isSideNavOpen }) => (isSideNavOpen ? '5.7rem' : '0')};
  transition: all 0.2s ease-in-out;
`;
