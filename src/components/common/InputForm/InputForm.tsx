import { forwardRef } from 'react';

import { InputStyled, InputWrapper, LabelStyled, RequiredSquare } from './InputForm.style';

interface InputForm extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  required?: boolean;
  inputType: 'date' | 'file' | 'number' | 'search' | 'tel' | 'text' | 'time' | 'datetime-local';
  placeholder?: string;
  maxLength?: number;
}

const InputForm = forwardRef<HTMLInputElement, InputForm>(
  ({ labelText, required = false, inputType, placeholder, maxLength, ...props }, ref) => {
    return (
      <InputWrapper {...props}>
        {labelText && (
          <LabelStyled htmlFor={labelText}>
            {labelText}
            {required && <RequiredSquare />}
          </LabelStyled>
        )}
        <InputStyled
          id={labelText}
          type={inputType}
          ref={ref}
          maxLength={maxLength}
          placeholder={placeholder}
        />
      </InputWrapper>
    );
  },
);

export default InputForm;
