interface Form {
  title: string;
  content: string; //#TODO: boolean일 수도 있음 (체크박스?)
}

interface UserForm {
  id: number;
  options: Form[];
  applicationStatus: string;
}

interface FormInfo {
  count: string;
  optionsTitles: string[];
  managed: boolean;
}

export { Form, UserForm, FormInfo };
