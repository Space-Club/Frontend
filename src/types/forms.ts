interface Form {
  title: string;
  content: string; //#TODO: boolean일 수도 있음 (체크박스?)
}

interface UserForm {
  userId: string;
  options: Form[];
  participationStatus: 'PENDING' | 'CONFIRMED' | 'CANCELED' | 'CANCEL_REQUESTED';
}

interface FormInfo {
  count: number;
  optionTitles: string[];
  managed: boolean;
}

export { Form, UserForm, FormInfo };
