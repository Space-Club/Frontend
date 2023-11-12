import { EventStatus } from '../event';

interface CancelEventRequest {
  eventId: string;
}

interface CancelEventResponse {
  eventStatus: EventStatus;
}

export { CancelEventRequest, CancelEventResponse };
