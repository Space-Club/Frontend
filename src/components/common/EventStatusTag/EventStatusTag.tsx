import { EventTag } from '@/types/event';

import { EventStatusTagStyled } from './EventStatusTag.style';

interface EventStateTagProps {
  eventTag: EventTag;
}

const EventStatusTag = ({ eventTag, ...props }: EventStateTagProps) => {
  return (
    <EventStatusTagStyled
      borderColor={eventTag?.borderColor ?? 'activeColor'}
      backgroundColor={eventTag?.backgroundColor ?? 'gray'}
      textColor={eventTag?.textColor ?? 'white'}
      {...props}
    >
      {eventTag?.title}
    </EventStatusTagStyled>
  );
};

export default EventStatusTag;
