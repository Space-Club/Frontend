import { ChangeEvent, forwardRef } from 'react';

import { InputStyled, InputWrapper, LabelStyled } from './InputForm.style';

interface InputForm {
  labelText: string;
  inputType: 'date' | 'file' | 'number' | 'search' | 'tel' | 'text' | 'time' | 'datetime-local';
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputForm = forwardRef<HTMLInputElement, InputForm>(
  ({ labelText, inputType, placeholder, onChange, required = false, ...props }, ref) => {
    return (
      <InputWrapper>
        <LabelStyled htmlFor={labelText}>{labelText}</LabelStyled>
        <InputStyled
          id={labelText}
          type={inputType}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          ref={ref}
          {...props}
        />
      </InputWrapper>
    );
  },
);

export default InputForm;
