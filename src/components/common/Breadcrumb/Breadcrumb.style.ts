import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const BreadcrumbContainer = styled.ol`
  list-style: none;
  display: flex;
  padding: 1rem 0 2rem 0;
`;

const CrumbStyled = styled.li`
  text-align: center;
  color: ${Theme.color.semiBlack};
  font-size: ${Theme.fontSize.largeContent};
  cursor: pointer;

  &:not(:last-of-type)::after {
    content: '>';
    padding: 0 0.5rem;
    cursor: default;
  }
`;

export { BreadcrumbContainer, CrumbStyled };
