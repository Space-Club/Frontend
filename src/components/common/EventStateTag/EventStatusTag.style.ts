import Theme from '@/styles/Theme';
import { EventStatusType } from '@/types/event';
import styled from '@emotion/styled';

const EventStatusTagStyled = styled.div<{ eventStatus: EventStatusType }>`
  width: 5.25rem;
  height: 1.375rem;
  line-height: 1.375rem;
  text-align: center;
  border-radius: 0.3125rem;
  font-size: 0.625rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  user-select: none;
  color: ${({ eventStatus }) =>
    eventStatus === 'confirmed'
      ? Theme.color.tGreen
      : eventStatus === 'pending'
      ? Theme.color.tBlue
      : Theme.color.tPink};
  border: 0.1rem solid
    ${({ eventStatus }) =>
      eventStatus === 'confirmed'
        ? Theme.color.tGreen
        : eventStatus === 'pending'
        ? Theme.color.tBlue
        : Theme.color.tPink};
`;

export { EventStatusTagStyled };
