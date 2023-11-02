import { forwardRef } from 'react';

import { InputStyled, InputWrapper, LabelStyled } from './InputForm.style';

interface InputForm {
  labelText?: string;
  inputType: 'date' | 'file' | 'number' | 'search' | 'tel' | 'text' | 'time' | 'datetime-local';
  placeholder?: string;
  maxLength?: number;
}

const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
  ({ labelText, inputType, placeholder, maxLength, ...props }, ref) => {
    return (
      <InputWrapper>
        {labelText && <LabelStyled htmlFor={labelText}>{labelText}</LabelStyled>}
        <InputStyled
          id={labelText}
          type={inputType}
          ref={ref}
          maxLength={maxLength}
          placeholder={placeholder}
          {...props}
        />
      </InputWrapper>
    );
  },
);

export default InputForm;
