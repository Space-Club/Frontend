import Theme from '@/styles/Theme';

type EventTagKey = 'confirmed' | 'pending' | 'cancelled' | 'cancelRequested';

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
  poster: string;
  startDate: string;
  startTime: string;
  location: string;
  clubName: string;
  clubImage: string;
}

export { EventTagKey, EventTags, EventTag, Event };
