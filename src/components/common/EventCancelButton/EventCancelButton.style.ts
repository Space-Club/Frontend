import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const EventCancelButtonStyled = styled.button`
  width: 5rem;
  height: 2.1875rem;
  line-height: 2.1875rem;
  border-radius: 0.3125rem;
  font-size: ${Theme.fontSize.tagText};
  text-align: center;
  background-color: ${Theme.color.white};
  border: 0.1rem solid ${Theme.color.tSeparator};
  color: ${Theme.color.tSeparator};
  user-select: none;
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  :hover {
    border: 0.1rem solid ${Theme.color.tRed};
    color: ${Theme.color.tRed};
  }

  :active {
    transform: scale(0.95);
  }
`;

export { EventCancelButtonStyled };
