import { FormType } from '@/types/event';

import FormDropDown from './FormDropDown';
import { AnswerStyled, FormItemContainer, QuestionStyled } from './FormItem.style';
import FormRadio from './FormRadio';

interface FormItem {
  id: number;
  title: string;
  type: FormType;
  options?: string[];
}

const FormItem = ({ id, title, type, options }: FormItem) => {
  return (
    <FormItemContainer>
      <QuestionStyled>
        {id}. {title}
      </QuestionStyled>
      {type === 'SELECT' ? (
        <FormDropDown options={options!} />
      ) : type === 'RADIO' ? (
        <FormRadio options={options!} keyName={title} />
      ) : type === 'NUMBER' ? (
        <AnswerStyled type="number" />
      ) : (
        <AnswerStyled type="text" />
      )}
    </FormItemContainer>
  );
};

export default FormItem;
