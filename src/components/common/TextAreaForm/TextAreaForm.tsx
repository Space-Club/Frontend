import { forwardRef } from 'react';

import { InputWrapper, LabelStyled, TextAreaStyled } from './TextAreaForm.style';

interface TextAreaForm {
  labelText: string;
  rows: number;
  placeholoder?: string;
}

const TextAreaForm = forwardRef<HTMLTextAreaElement, TextAreaForm>(
  ({ labelText, placeholoder, rows, ...props }, ref) => {
    return (
      <InputWrapper>
        <LabelStyled htmlFor={labelText}>{labelText}</LabelStyled>
        <TextAreaStyled
          id={labelText}
          rows={rows}
          placeholder={placeholoder}
          ref={ref}
          {...props}
        />
      </InputWrapper>
    );
  },
);

export default TextAreaForm;
