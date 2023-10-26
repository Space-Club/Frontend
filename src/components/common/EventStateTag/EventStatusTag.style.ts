import Theme from '@/styles/Theme';
import { EventStatusType } from '@/types/event';
import styled from '@emotion/styled';

const EventStatusTagStyled = styled.div<{ eventStatus: EventStatusType }>`
  width: 4.375rem;
  height: 1.875rem;
  line-height: 1.875rem;
  border-radius: 0.3125rem;
  font-size: 0.625rem;
  text-align: center;
  color: white;
  background: ${({ eventStatus }) =>
    eventStatus === 'cancelRequested'
      ? Theme.color.cancelRequestPendingBackground
      : eventStatus === 'cancelled'
      ? Theme.color.cancelledBackground
      : eventStatus === 'confirmed'
      ? Theme.color.confirmedBackground
      : eventStatus === 'paymentPending'
      ? Theme.color.paymentPendingBackground
      : eventStatus === 'pending'
      ? Theme.color.pendingBackground
      : Theme.color.gray};
`;

export { EventStatusTagStyled };
