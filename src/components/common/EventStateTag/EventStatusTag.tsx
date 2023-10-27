import { EventStatusType } from '@/types/event';

import { EventStatusTagStyled } from './EventStatusTag.style';

interface EventStateTagProps {
  eventStatus: EventStatusType;
}

const EventStatusTag = ({ eventStatus }: EventStateTagProps) => {
  return (
    <EventStatusTagStyled eventStatus={eventStatus}>
      {eventStatus === 'cancelled'
        ? '취소완료'
        : eventStatus === 'confirmed'
        ? '신청확정'
        : eventStatus === 'pending'
        ? '관리자 확인중'
        : '오류'}
    </EventStatusTagStyled>
  );
};

export default EventStatusTag;
