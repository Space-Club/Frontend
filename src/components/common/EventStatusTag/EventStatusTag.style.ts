import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

interface EventStatusTagStyledProps {
  borderColor: keyof typeof Theme.color;
  backgroundColor: keyof typeof Theme.color;
  textColor: keyof typeof Theme.color;
}

const EventStatusTagStyled = styled.div<EventStatusTagStyledProps>`
  width: fit-content;
  height: 1.18rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.3125rem;
  padding: 0 0.5rem;
  font-size: ${Theme.fontSize.tagText};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  user-select: none;
  color: ${({ textColor }) => Theme.color[textColor]};
  background-color: ${({ backgroundColor }) => Theme.color[backgroundColor]};
  border: 1px solid ${({ borderColor }) => Theme.color[borderColor]};
`;

export { EventStatusTagStyled };
