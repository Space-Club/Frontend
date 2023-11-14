import { forwardRef } from 'react';

import { RequiredSquare } from '../InputForm/InputForm.style';
import { InputWrapper, LabelStyled, TextAreaStyled } from './TextAreaForm.style';

interface TextAreaForm {
  labelText?: string;
  required?: boolean;
  rows: number;
  placeholder?: string;
  maxLength?: number;
}

const TextAreaForm = forwardRef<HTMLTextAreaElement, TextAreaForm>(
  ({ labelText, required = false, placeholder, rows, maxLength, ...props }, ref) => {
    return (
      <InputWrapper>
        <LabelStyled htmlFor={labelText}>
          {labelText}
          {required && <RequiredSquare />}
        </LabelStyled>
        <TextAreaStyled
          id={labelText}
          rows={rows}
          placeholder={placeholder}
          maxLength={maxLength}
          ref={ref}
          {...props}
        />
      </InputWrapper>
    );
  },
);

export default TextAreaForm;
