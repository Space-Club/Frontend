import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const DeleteMemberButtonStyled = styled.button`
  width: 1.8125rem;
  height: 1.25rem;
  border-radius: 0.3125rem;
  font-size: ${Theme.fontSize.tagText};
  background-color: ${Theme.color.tWhiteGrey};
  border: none;
  cursor: pointer;
  outline: none;
`;

export { DeleteMemberButtonStyled };
