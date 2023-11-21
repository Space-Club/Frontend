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
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}

export { FormType, FormOption, FormOptionButtonText, FormInfo };
