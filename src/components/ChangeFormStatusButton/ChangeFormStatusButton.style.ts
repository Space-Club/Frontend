import Theme from '@/styles/Theme';
import { EventStatus } from '@/types/event';
import styled from '@emotion/styled';

const StatusButtonContainer = styled.button<{ status: EventStatus }>`
  width: 3rem;
  height: 1.4rem;
  border-radius: 0.2rem;
  outline: none;
  border: 1px solid;
  background-color: white;
  color: ${({ status }) =>
    status === 'CONFIRMED' ? Theme.color.tSemiActive : Theme.color.textGrey};
  font-size: ${Theme.fontSize.tagText};
  cursor: ${({ status }) => (status === 'CANCELED' ? 'default' : 'pointer')};
`;

const ButtonValueStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
`;

export { StatusButtonContainer, ButtonValueStyled };
