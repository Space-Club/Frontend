import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const BreadcrumbContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  padding: 1rem 0 2rem 0;
`;

const CrumbStyled = styled.span`
  text-align: center;
  color: ${Theme.color.semiBlack};
  font-size: ${Theme.fontSize.smallTitle};

  &:not(:last-of-type)::after {
    content: '>';
  }
`;

export { BreadcrumbContainer, CrumbStyled };
