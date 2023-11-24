import Theme from '@/styles/Theme';

import { FormType } from './form';

type EventStatus = 'CONFIRMED' | 'PENDING' | 'CANCEL_REQUESTED' | 'CANCELED';

type EventTagKey = 'publicEvent' | 'clubOnlyEvent' | EventStatus;

type EventType = 'show' | 'promotion' | 'recruitment' | 'club';

type ProfileEventType = 'applied' | 'bookmark';

type eventTypeAPI = 'SHOW' | 'PROMOTION' | 'RECRUITMENT' | 'CLUB';

interface EventTag {
  title: string;
  borderColor: keyof typeof Theme.color;
  backgroundColor: keyof typeof Theme.color;
  textColor: keyof typeof Theme.color;
}

type EventTags = {
  [key in EventTagKey]: EventTag;
};

interface Event {
  id: string;
  title: string;
  posterImageUrl: string;
  startDate: string;
  startTime: string;
  location: string;
  clubName: string;
  clubLogoImageUrl: string;
}

interface EventInfo {
  title: string;
  posterImageUrl: string;
  location: string;
  startDate: string;
  startTime: string;
}

type ClubEventInfo = EventInfo & { openStatus: 'ALL' | 'CLUB' };

interface BookmarkedEvent
  extends Pick<Event, 'id' | 'title' | 'location' | 'clubName' | 'posterImageUrl' | 'startDate'> {
  bookmark: boolean;
}

interface Schedule {
  eventId: string;
  title: string;
  startDateTime: string;
  endDateTime: string;
  manager: string;
}

interface SchedulesProps {
  schedules: Schedule[];
}

interface getEventFormResponse {
  event: {
    title: string;
  };
  form: {
    description: string;
    options: {
      id: number;
      title: string;
      type: FormType;
      option?: string[];
    }[];
  };
}

interface FormPage {
  eventType: eventTypeAPI;
  clubId: string;
  isEdit?: boolean;
}

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export {
  getEventFormResponse,
  Event,
  EventTags,
  EventTagKey,
  ClubEventInfo,
  EventType,
  EventTag,
  eventTypeAPI,
  ProfileEventType,
  EventStatus,
  FormPage,
  Schedule,
  SchedulesProps,
  ValuePiece,
  Value,
  BookmarkedEvent,
  EventInfo,
};
