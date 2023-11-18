import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const SubmittedFormsContainer = styled.div`
  width: 100%;
  padding-top: 3rem;
`;

const FormLengthStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${Theme.color.semiBlack};
  font-size: ${Theme.fontSize.smallContent};
`;

const SubmittedFormsWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: auto;
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

export { SubmittedFormsContainer, FormLengthStyled, SubmittedFormsWrapper, FormsWrapper };
