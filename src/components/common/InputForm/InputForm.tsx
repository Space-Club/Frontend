import { InputStyled, InputWrapper, LabelStyled } from './InputForm.style';

interface InputForm {
  labelText: string;
  labelId: string;
  inputType: 'date' | 'file' | 'number' | 'search' | 'tel' | 'text' | 'time';
}

const InputForm = ({ labelText, labelId, inputType, ...props }: InputForm) => {
  return (
    <InputWrapper>
      <LabelStyled htmlFor={labelId}>{labelText}</LabelStyled>
      <InputStyled id={labelId} type={inputType} {...props} />
    </InputWrapper>
  );
};

export default InputForm;
