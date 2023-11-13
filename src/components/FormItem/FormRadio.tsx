import {
  FormRadioContainer,
  FormRadioItemInput,
  FormRadioItemLabel,
  FormRadioItemWrapper,
} from './FormRadio.style';

interface FormRadio {
  options: string[];
  keyName: string;
}

const FormRadio = ({ options, keyName }: FormRadio) => {
  return (
    <FormRadioContainer>
      {options.map((option) => (
        <FormRadioItemWrapper>
          <FormRadioItemInput type="radio" name={keyName} id={option} value={option} />
          <FormRadioItemLabel htmlFor={option}>{option}</FormRadioItemLabel>
        </FormRadioItemWrapper>
      ))}
    </FormRadioContainer>
  );
};

export default FormRadio;
