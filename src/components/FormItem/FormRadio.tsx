import { Question } from '@/types/api/postApplyEvent';

import { ChangeEvent } from 'react';

import {
  FormRadioContainer,
  FormRadioItemInput,
  FormRadioItemLabel,
  FormRadioItemWrapper,
} from './FormRadio.style';

interface FormRadio {
  options: string[];
  keyName: string;
  id: number;
  onAnswer: (value: Question) => void;
}

const FormRadio = ({ options, keyName, id, onAnswer }: FormRadio) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onAnswer({
      optionId: id,
      content: e.target.value,
    });
  };
  return (
    <FormRadioContainer>
      {options.map((option) => (
        <FormRadioItemWrapper key={option}>
          <FormRadioItemInput
            type="radio"
            name={keyName}
            id={option}
            value={option}
            onChange={handleChange}
          />
          <FormRadioItemLabel htmlFor={option}>{option}</FormRadioItemLabel>
        </FormRadioItemWrapper>
      ))}
    </FormRadioContainer>
  );
};

export default FormRadio;
