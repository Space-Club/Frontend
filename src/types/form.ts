import { EventType } from './event';

type FormType = 'RADIO' | 'TEXT' | 'SELECT' | 'NUMBER' | 'CHECKBOX';

type FormOptionButtonText = {
  [key in EventType]: string;
};

interface FormOption {
  id: string;
  title: string;
  options?: string[];
  type: FormType;
  predefined: boolean;
}

interface FormInfo {
  openDate: string;
  openTime: string;
  closeDate: string;
  closeTime: string;
}

export { FormType, FormOption, FormOptionButtonText, FormInfo };
