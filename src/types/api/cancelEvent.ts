import { EventStatus } from '../event';

interface CancelEventRequest {
  eventId: string;
}

interface CancelEventResponse {
  participationStatus: EventStatus;
}

export { CancelEventRequest, CancelEventResponse };
