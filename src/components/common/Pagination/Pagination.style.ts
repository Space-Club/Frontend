import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const PaginationWrapper = styled.nav`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;
const PageButton = styled.button`
  border: none;
  background: none;
  margin: 0 1rem;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: revert;
  }

  &[aria-current] {
    color: ${Theme.color.tActive};
    cursor: revert;
  }
`;

export { PaginationWrapper, PageButton };
