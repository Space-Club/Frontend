interface Form {
  title: string;
  content: string; //#TODO: boolean일 수도 있음 (체크박스?)
}

interface UserForm {
  id: number;
  options: Form[];
  applicationStatus: 'PENDING' | 'CONFIRMED' | 'CANCELED' | 'CANCEL_REQUESTED';
}

interface FormInfo {
  count: string;
  optionTitles: string[];
  managed: boolean;
}

export { Form, UserForm, FormInfo };
