import { Club } from '../club';
import { eventTypeAPI } from '../event';

interface GetMainBannerEventsResponse {
  clubInfo: Pick<Club, 'coverImageUrl' | 'name'>;
  eventInfo: {
    eventId: string;
    title: string;
    formCloseDateTime: string;
    eventCategory: Omit<eventTypeAPI, 'CLUB'>;
  };
}

export { GetMainBannerEventsResponse };
