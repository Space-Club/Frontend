import { ChangeEvent, RefObject } from 'react';

import { InputStyled, InputWrapper, LabelStyled } from './InputForm.style';

interface InputForm<T> {
  labelText: string;
  labelId: string;
  inputType: 'date' | 'file' | 'number' | 'search' | 'tel' | 'text' | 'time';
  inputRef?: RefObject<HTMLInputElement>;
  value: T;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputForm = <T extends string | number | string[]>({
  labelText,
  labelId,
  inputType,
  inputRef,
  value,
  onChange,
  ...props
}: InputForm<T>) => {
  return (
    <InputWrapper>
      <LabelStyled htmlFor={labelId}>{labelText}</LabelStyled>
      <InputStyled
        id={labelId}
        type={inputType}
        ref={inputRef}
        value={value}
        onChange={onChange}
        {...props}
      />
    </InputWrapper>
  );
};

export default InputForm;
