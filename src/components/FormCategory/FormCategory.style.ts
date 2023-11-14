import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const FormLengthStyled = styled.div`
  color: ${Theme.color.semiBlack};
  font-size: ${Theme.fontSize.smallContent};
  padding-bottom: 0.3rem;
`;

const SubmittedFormsContainer = styled.div`
  overflow-x: scroll;
  width: 100%;
`;

const FormsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 40rem;
  width: fit-content;

  &:first-of-type {
    padding-bottom: 0.2rem;
  }
`;

export { FormLengthStyled, SubmittedFormsContainer, FormsWrapper };
