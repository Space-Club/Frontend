import { forwardRef } from 'react';

import { InputWrapper, LabelStyled, TextAreaStyled } from './TextAreaForm.style';

interface TextAreaForm {
  labelText?: string;
  rows: number;
  placeholder?: string;
  maxLength?: number;
}

const TextAreaForm = forwardRef<HTMLTextAreaElement, TextAreaForm>(
  ({ labelText, placeholder, rows, maxLength, ...props }, ref) => {
    return (
      <InputWrapper>
        <LabelStyled htmlFor={labelText}>{labelText}</LabelStyled>
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
