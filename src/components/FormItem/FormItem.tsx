import { FormType, Question } from '@/types/event';

import { ChangeEvent } from 'react';

import FormDropDown from './FormDropDown';
import { AnswerStyled, FormItemContainer, QuestionStyled } from './FormItem.style';
import FormRadio from './FormRadio';

interface FormItem {
  id: number;
  title: string;
  type: FormType;
  options?: string[];
  onAnswer: (value: Question) => void;
}

const FormItem = ({ id, title, type, options, onAnswer }: FormItem) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onAnswer({
      optionId: id,
      content: e.target.value,
    });
  };

  return (
    <FormItemContainer>
      <QuestionStyled>
        {id}. {title}
      </QuestionStyled>
      {type === 'SELECT' && options ? (
        <FormDropDown options={options} id={id} onAnswer={onAnswer} />
      ) : type === 'RADIO' && options ? (
        <FormRadio options={options} keyName={title} id={id} onAnswer={onAnswer} />
      ) : type === 'NUMBER' ? (
        <AnswerStyled type="number" onBlur={handleChange} />
      ) : (
        <AnswerStyled type="text" onBlur={handleChange} />
      )}
    </FormItemContainer>
  );
};

export default FormItem;
