import { forwardRef } from 'react';

import {
  InputContainer,
  InputStyled,
  InputUnit,
  InputWrapper,
  LabelStyled,
  RequiredSquare,
} from './InputForm.style';

interface InputForm extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  required?: boolean;
  inputType: 'date' | 'file' | 'number' | 'search' | 'tel' | 'text' | 'time' | 'datetime-local';
  placeholder?: string;
  maxLength?: number;
  containerWidth?: string | number;
  unit?: '명' | '원' | '매';
  isHalf?: boolean;
}

const InputForm = forwardRef<HTMLInputElement, InputForm>(
  (
    {
      labelText,
      required = false,
      inputType,
      placeholder,
      maxLength,
      containerWidth,
      unit,
      isHalf,
      ...props
    },
    ref,
  ) => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (inputType === 'datetime-local') {
        event.preventDefault();
      }
    };
    return (
      <InputContainer style={{ width: containerWidth }}>
        {labelText && (
          <LabelStyled htmlFor={labelText}>
            {labelText}
            {required && <RequiredSquare />}
          </LabelStyled>
        )}
        <InputWrapper style={{ display: 'flex', position: 'relative' }}>
          <InputStyled
            id={labelText}
            type={inputType}
            ref={ref}
            maxLength={maxLength}
            placeholder={placeholder}
            onKeyDown={handleKeyDown}
            {...props}
          />
          {unit && <InputUnit isHalf={!!isHalf}>{unit}</InputUnit>}
        </InputWrapper>
      </InputContainer>
    );
  },
);

export default InputForm;
