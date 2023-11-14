import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const InputWrapper = styled.div`
  width: 100%;
`;
const LabelStyled = styled.label`
  display: block;
  font-size: 1rem;
`;
const RequiredSquare = styled.span`
  display: inline-block;
  position: relative;
  bottom: 0.75rem;
  left: 0.05rem;
  width: 0.3rem;
  height: 0.3rem;
  background-color: ${Theme.color.tButton};
  border-radius: 50%;
`;
const InputStyled = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  outline: none;
  margin-top: 0.5rem;
  border: 1px solid ${Theme.color.tLine};
  border-radius: 1rem;
  padding-left: 1rem;
  box-sizing: border-box;
`;

export { InputWrapper, LabelStyled, RequiredSquare, InputStyled };
