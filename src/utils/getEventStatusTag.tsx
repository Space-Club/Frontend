import EventStatusTag from '@/components/common/EventStatusTag/EventStatusTag';
import { APPLIED_EVENTS_TAGS } from '@/constants/event';

const getEventStatusTag = (status: string) => {
  switch (status) {
    case 'PENDING':
      return <EventStatusTag eventTag={APPLIED_EVENTS_TAGS.PENDING} />;
    case 'CONFIRMED':
      return <EventStatusTag eventTag={APPLIED_EVENTS_TAGS.CONFIRMED} />;
    case 'CANCELED':
      return <EventStatusTag eventTag={APPLIED_EVENTS_TAGS.CANCELLED} />;
    case 'CANCEL_REQUESTED':
      return <EventStatusTag eventTag={APPLIED_EVENTS_TAGS.CANCEL_REQUESTED} />;
    default:
      return null;
  }
};

export { getEventStatusTag };
