import { EventStatus } from '../event';

interface cancelEventRequest {
  eventId: string;
}

interface cancelEventResponse {
  eventStatus: EventStatus;
}

export { cancelEventRequest, cancelEventResponse };
