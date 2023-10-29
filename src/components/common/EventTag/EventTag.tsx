import { EventTag } from '@/types/event';

import { EventStatusTagStyled } from './EventTag.style';

interface EventStateTagProps {
  eventTag: EventTag;
}

const EventStatusTag = ({ eventTag, ...props }: EventStateTagProps) => {
  return (
    <EventStatusTagStyled
      borderColor={eventTag.borderColor}
      backgroundColor={eventTag.backgroundColor}
      textColor={eventTag.textColor}
      {...props}
    >
      {eventTag.title}
    </EventStatusTagStyled>
  );
};

export default EventStatusTag;
