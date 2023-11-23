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

interface FormInfo {
  openDate: string;
  openTime: string;
  closeDate: string;
  closeTime: string;
}

export { FormType, FormOption, FormOptionButtonText, FormInfo };
