import { EventStatus } from '../event';

interface SubmittedFormStatusRequest {
  eventId: string;
  formUserId: string;
  status: EventStatus;
}

export { SubmittedFormStatusRequest };
