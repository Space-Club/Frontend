import { EventStatus } from '../event';

interface CancelEventRequest {
  eventId: string;
}

interface CancelEventResponse {
  applicationStatus: EventStatus;
}

export { CancelEventRequest, CancelEventResponse };
