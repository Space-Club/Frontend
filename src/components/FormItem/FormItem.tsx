import FormDropDown from './FormDropDown';
import { Answer, FormItemContainer, Question } from './FormItem.style';
import FormRadio from './FormRadio';

interface FormItem {
  id: number;
  title: string;
  type: 'TEXT' | 'SELECT' | 'RADIO' | 'NUMBER';
  options?: string[];
}

const FormItem = ({ id, title, type, options }: FormItem) => {
  return (
    <FormItemContainer>
      <Question>
        {id}. {title}
      </Question>
      {type === 'SELECT' ? (
        <FormDropDown options={options!} />
      ) : type === 'RADIO' ? (
        <FormRadio options={options!} keyName={title} />
      ) : type === 'NUMBER' ? (
        <Answer type="number" />
      ) : (
        <Answer type="text" />
      )}
    </FormItemContainer>
  );
};

export default FormItem;
