import { FormOption } from '../form';

interface PostFormOptionRequest {
  eventId: string;
  description: string;
  managed: boolean;
  options: Pick<FormOption, 'title' | 'type' | 'visible'>;
}

interface PostFormOptionResponse {
  location: string;
}

export { PostFormOptionRequest, PostFormOptionResponse };
