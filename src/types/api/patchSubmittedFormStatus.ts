import { EventStatus } from '../event';

interface SubmittedFormStatusRequest {
  eventId: string;
  formUserId: string;
  participationStatus: EventStatus;
}

export { SubmittedFormStatusRequest };
