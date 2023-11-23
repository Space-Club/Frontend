import { FieldValues } from 'react-hook-form';

import { eventTypeAPI } from '../event';

interface postPerformanceFormRequest {
  data: FieldValues;
  eventType: eventTypeAPI;
  clubId: string;
  eventId?: string;
}

interface postPerformanceFormResponse {
  eventId: string;
}

export { postPerformanceFormRequest, postPerformanceFormResponse };
