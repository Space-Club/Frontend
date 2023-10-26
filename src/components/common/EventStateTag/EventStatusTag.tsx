import { EventStatusType } from '@/types/event';

import { EventStatusTagStyled } from './EventStatusTag.style';

interface EventStateTagProps {
  eventStatus: EventStatusType;
}

const EventStatusTag = ({ eventStatus }: EventStateTagProps) => {
  return (
    <EventStatusTagStyled eventStatus={eventStatus}>
      {eventStatus === 'cancelRequested'
        ? '취소 요청'
        : eventStatus === 'cancelled'
        ? '취소됨'
        : eventStatus === 'confirmed'
        ? '신청 확정'
        : eventStatus === 'pending'
        ? '신청 대기'
        : eventStatus === 'paymentPending'
        ? '결제 대기'
        : '오류'}
    </EventStatusTagStyled>
  );
};

export default EventStatusTag;
