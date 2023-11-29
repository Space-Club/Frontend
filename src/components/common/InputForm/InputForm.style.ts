import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const InputContainer = styled.div`
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
const InputWrapper = styled.div`
  position: relative;
`;
const InputStyled = styled.input`
  position: relative;
  width: 100%;
  height: 3rem;
  outline: none;
  margin-top: 0.5rem;
  padding: 0 1rem;
  border: 1px solid ${Theme.color.tLine};
  border-radius: 1rem;
  box-sizing: border-box;

  :disabled {
    background-color: ${Theme.color.white};
    color: ${Theme.color.black};
    border: none;
  }

  &[type='datetime-local']::-webkit-datetime-edit {
    padding-left: 1.5rem;
  }

  &[type='datetime-local']::-webkit-calendar-picker-indicator {
    position: absolute;
    width: 100%;
    cursor: pointer;
  }

  &[type='number'] {
    padding-right: 2rem;
  }

  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
const InputUnit = styled.span<{ isHalf?: boolean }>`
  position: absolute;
  top: calc(50% - 0.3rem);
  right: ${({ isHalf }) => (isHalf ? 'calc(50% + 1rem)' : '1rem')};
  font-size: 0.8rem;
  color: ${Theme.color.semiBlack};
`;

export { InputContainer, LabelStyled, RequiredSquare, InputWrapper, InputStyled, InputUnit };
