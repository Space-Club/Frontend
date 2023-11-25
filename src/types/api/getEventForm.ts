import { FormType } from '../form';

interface getEventFormRequest {
  eventId: string;
}

interface getEventFormResponse {
  event: {
    title: string;
  };
  form: {
    description: string;
    options: {
      id: number;
      title: string;
      type: FormType;
      option?: string[];
    }[];
  };
}

export { getEventFormRequest, getEventFormResponse };
