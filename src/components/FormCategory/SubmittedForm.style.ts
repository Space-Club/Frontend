import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

import { CategoryItemStyled, CategoryRowStyled } from './Category.style';

const FormStyled = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  border-bottom: 1px solid ${Theme.color.tSeparator};
  font-size: ${Theme.fontSize.smallContent};

  &:hover {
    background-color: ${Theme.color.tWhiteGrey};
  }
`;

const FormRowStyled = styled(CategoryRowStyled)``;

const FormItemStyled = styled(CategoryItemStyled)``;

export { FormStyled, FormRowStyled, FormItemStyled };
