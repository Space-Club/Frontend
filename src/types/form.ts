type FormType = 'RADIO' | 'TEXT' | 'SELECT' | 'NUMBER';

interface FormOption {
  id: string;
  title: string;
  type: FormType;
  visible: boolean;
}

export { FormType, FormOption };
