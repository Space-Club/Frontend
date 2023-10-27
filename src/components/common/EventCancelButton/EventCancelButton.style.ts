import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const EventCancelButtonStyled = styled.button`
  width: 4.375rem;
  height: 1.875rem;
  line-height: 1.875rem;
  border-radius: 0.3125rem;
  font-size: 0.625rem;
  text-align: center;
  background-color: ${Theme.color.white};
  border: 0.1rem solid ${Theme.color.tRed};
  box-sizing: border-box;
  color: ${Theme.color.tRed};
  cursor: pointer;
`;

export { EventCancelButtonStyled };
