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

export { EventTagKey, EventTags, EventTag };
