import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

export const InputWrapper = styled.div`
  width: 100%;
`;
export const LabelStyled = styled.label`
  display: block;
`;
export const TextAreaStyled = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  margin-top: 0.5rem;
  border: 1px solid ${Theme.color.tLine};
  border-radius: 1rem;
  padding: 1rem;
  box-sizing: border-box;
`;
