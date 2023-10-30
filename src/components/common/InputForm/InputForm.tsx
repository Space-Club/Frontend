import { forwardRef } from 'react';

import { InputStyled, InputWrapper, LabelStyled } from './InputForm.style';

interface InputFormProps {
  labelText: string;
  inputType: 'date' | 'file' | 'number' | 'search' | 'tel' | 'text' | 'time';
  placeholoder?: string;
}

const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
  ({ labelText, inputType, placeholoder, ...props }, ref) => {
    return (
      <InputWrapper>
        <LabelStyled htmlFor={labelText}>{labelText}</LabelStyled>
        <InputStyled
          id={labelText}
          type={inputType}
          ref={ref}
          placeholder={placeholoder}
          {...props}
        />
      </InputWrapper>
    );
  },
);

export default InputForm;
