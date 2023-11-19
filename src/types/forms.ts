interface Form {
  title: string;
  content: string; //#TODO: boolean일 수도 있음 (체크박스?)
}

interface UserForm {
  id: string;
  options: Form[];
  applicationStatus: 'PENDING' | 'CONFIRMED' | 'CANCELED' | 'CANCEL_REQUESTED';
}

interface FormInfo {
  count: number;
  optionTitles: string[];
  managed: boolean;
}

interface Question {
  optionId: number;
  content: string;
}

interface postEventApplyRequest {
  eventId: string;
  forms: Question[];
}

export { Form, UserForm, FormInfo, Question, postEventApplyRequest };
