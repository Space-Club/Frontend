import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

import { CategoryItemStyled, CategoryRowStyled } from '../Category/Category.style';

const FormStyled = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid ${Theme.color.tSeparator};
  font-size: ${Theme.fontSize.smallContent};

  &:hover {
    background-color: ${Theme.color.tWhiteGrey};
  }
`;

const FormRowStyled = styled(CategoryRowStyled)``;

const FormItemStyled = styled(CategoryItemStyled)`
  cursor: pointer;
`;

export { FormStyled, FormRowStyled, FormItemStyled };
