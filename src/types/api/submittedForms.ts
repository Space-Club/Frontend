import { FormInfo, UserForm } from '../forms';

interface GetSubmittedFormsRequest {
  eventId: string;
}

interface GetSubmittedFormsResponse {
  formInfo: FormInfo;
  userForms: UserForm[];
}

export { GetSubmittedFormsRequest, GetSubmittedFormsResponse };
