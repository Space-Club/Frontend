import { EventStatus } from './event';

interface Form {
  title: string;
  content: string;
}

interface UserForm {
  userId: string;
  options: Form[];
  participation: {
    status: EventStatus;
    dateTime: string;
  };
  ticketCount?: string;
}

interface FormInfo {
  count: number;
  optionTitles: string[];
  managed: boolean;
}

export { Form, UserForm, FormInfo };
