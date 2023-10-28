import { ChangeEvent, RefObject } from 'react';

import { InputStyled, InputWrapper, LabelStyled } from './InputForm.style';

interface InputForm<T> {
  labelText: string;
  inputType: 'date' | 'file' | 'number' | 'search' | 'tel' | 'text' | 'time' | 'datetime-local';
  placeholoder?: string;
  inputRef?: RefObject<HTMLInputElement>;
  value?: T;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputForm = <T extends string | number | string[]>({
  labelText,
  inputType,
  placeholoder,
  inputRef,
  value,
  onChange,
  required = false,
  ...props
}: InputForm<T>) => {
  return (
    <InputWrapper>
      <LabelStyled htmlFor={labelText}>{labelText}</LabelStyled>
      <InputStyled
        id={labelText}
        type={inputType}
        ref={inputRef}
        placeholder={placeholoder}
        value={value}
        onChange={onChange}
        required={required}
        {...props}
      />
    </InputWrapper>
  );
};

export default InputForm;
