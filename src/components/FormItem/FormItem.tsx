import { SUBMIT_FORM_OPTIONS } from '@/constants/event';
import { FormType, Question } from '@/types/event';

import { ChangeEvent, useEffect, useState } from 'react';

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
  const [itemOptions, setItemOptions] = useState<string[] | undefined>(options);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onAnswer({
      optionId: id,
      content: e.target.value,
    });
  };

  useEffect(() => {
    switch (title) {
      case 'MBTI':
        setItemOptions(SUBMIT_FORM_OPTIONS.MBTI);
        break;
      case '성별':
        setItemOptions(SUBMIT_FORM_OPTIONS.GENDER);
        break;
    }
  }, [title]);

  return (
    <FormItemContainer>
      <QuestionStyled>
        {id}. {title}
      </QuestionStyled>
      {type === 'SELECT' && itemOptions ? (
        <FormDropDown options={itemOptions} id={id} onAnswer={onAnswer} />
      ) : type === 'RADIO' && itemOptions ? (
        <FormRadio options={itemOptions} keyName={title} id={id} onAnswer={onAnswer} />
      ) : type === 'NUMBER' ? (
        <AnswerStyled type="number" onBlur={handleChange} required />
      ) : (
        <AnswerStyled type="text" onBlur={handleChange} required />
      )}
    </FormItemContainer>
  );
};

export default FormItem;
