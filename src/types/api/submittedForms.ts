import { PageData } from '../common';
import { FormInfo, UserForm } from '../forms';

interface GetSubmittedFormsRequest {
  eventId: string;
  pageNumber: number;
}

interface GetSubmittedFormsResponse {
  formInfo: FormInfo;
  userForms: UserForm[];
  pageData: PageData;
}

export { GetSubmittedFormsRequest, GetSubmittedFormsResponse };
