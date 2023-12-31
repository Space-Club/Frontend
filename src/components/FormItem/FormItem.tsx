import { SUBMIT_FORM_OPTIONS } from '@/constants/form';
import { Question } from '@/types/api/postApplyEvent';
import { FormType } from '@/types/form';

import { ChangeEvent, useEffect, useState } from 'react';

import FormDropDown from './FormDropDown';
import { AnswerStyled, FormItemContainer, QuestionStyled } from './FormItem.style';
import FormRadio from './FormRadio';

interface FormItem {
  id: number;
  index: number;
  title: string;
  type: FormType;
  options?: string[];
  onAnswer: (value: Question) => void;
}

const FormItem = ({ id, index, title, type, options, onAnswer }: FormItem) => {
  const [itemOptions, setItemOptions] = useState<string[] | undefined>(options);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onAnswer({
      optionId: id,
      content: e.target.value,
    });
  };

  const renderAnswer = () => {
    if (type === 'SELECT' && itemOptions) {
      return <FormDropDown options={itemOptions} id={id} onAnswer={onAnswer} />;
    } else if (type === 'RADIO' && itemOptions) {
      return <FormRadio options={itemOptions} keyName={title} id={id} onAnswer={onAnswer} />;
    } else if (type === 'NUMBER') {
      return <AnswerStyled type="number" maxLength={1000} onBlur={handleChange} required />;
    } else {
      return <AnswerStyled type="text" maxLength={1000} onBlur={handleChange} required />;
    }
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
        {index + 1}. {title}
      </QuestionStyled>
      {renderAnswer()}
    </FormItemContainer>
  );
};

export default FormItem;
