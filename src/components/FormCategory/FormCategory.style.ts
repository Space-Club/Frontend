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
  min-width: 50rem;
  width: fit-content;

  &:first-of-type {
    padding-bottom: 0.2rem;
  }
`;

const LineStyled = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  padding: 0 1rem;
  border-bottom: 1px solid ${Theme.color.tSeparator};
  font-size: ${Theme.fontSize.smallContent};

  &:first-of-type {
    height: 2.2rem;
    border-top: 2px solid ${Theme.color.textGrey};
    border-bottom: 2px solid ${Theme.color.textGrey};
    font-size: ${Theme.fontSize.largeContent};
  }

  &:not(:first-of-type):hover {
    background-color: ${Theme.color.tWhiteGrey};
  }
`;

const LineItemStyled = styled.div`
  width: 10rem;

  &:first-of-type {
    width: 4rem;
  }
`;

export { FormLengthStyled, SubmittedFormsContainer, FormsWrapper, LineStyled, LineItemStyled };
