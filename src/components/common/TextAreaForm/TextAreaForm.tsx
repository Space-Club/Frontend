import { InputWrapper, LabelStyled, TextAreaStyled } from './TextAreaForm.style';

interface TextAreaForm {
  labelText: string;
  rows: number;
  placeholoder?: string;
}

const TextAreaForm = ({ labelText, placeholoder, rows, ...props }: TextAreaForm) => {
  return (
    <InputWrapper>
      <LabelStyled htmlFor={labelText}>{labelText}</LabelStyled>
      <TextAreaStyled id={labelText} rows={rows} placeholder={placeholoder} required {...props} />
    </InputWrapper>
  );
};

export default TextAreaForm;
