import { forwardRef } from 'react';

import { InputStyled, InputWrapper, LabelStyled } from './InputForm.style';

interface InputForm {
  labelText?: string;
  inputType: 'date' | 'file' | 'number' | 'search' | 'tel' | 'text' | 'time' | 'datetime-local';
  placeholder?: string;
}

const InputForm = forwardRef<HTMLInputElement, InputForm>(
  ({ labelText, inputType, placeholder, ...props }, ref) => {
    return (
      <InputWrapper>
        {labelText && <LabelStyled htmlFor={labelText}>{labelText}</LabelStyled>}
        <InputStyled
          id={labelText}
          type={inputType}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
      </InputWrapper>
    );
  },
);

export default InputForm;
