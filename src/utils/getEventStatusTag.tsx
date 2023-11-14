import EventStatusTag from '@/components/common/EventTag/EventTag';
import { MY_EVENTS_TAGS } from '@/constants/event';

const getEventStatusTag = (status: string) => {
  switch (status) {
    case 'PENDING':
      return <EventStatusTag eventTag={MY_EVENTS_TAGS.pending} />;
    case 'CONFIRMED':
      return <EventStatusTag eventTag={MY_EVENTS_TAGS.confirmed} />;
    case 'CANCELED':
      return <EventStatusTag eventTag={MY_EVENTS_TAGS.cancelled} />;
    case 'CANCEL_REQUESTED':
      return <EventStatusTag eventTag={MY_EVENTS_TAGS.cancelRequested} />;
    default:
      return null;
  }
};

export { getEventStatusTag };
