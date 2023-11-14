import { EventType } from './event';

type FormType = 'RADIO' | 'TEXT' | 'SELECT' | 'NUMBER';

type FormOptionButtonText = {
  [key in EventType]: string;
};

interface FormOption {
  id: string;
  title: string;
  type: FormType;
  visible: boolean;
}

export { FormType, FormOption, FormOptionButtonText };
