import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const DeleteMemberButtonStyled = styled.button`
  height: 1.25rem;
  padding: 0 0.2rem;
  margin-left: 0.2rem;
  white-space: nowrap;
  border-radius: 0.3125rem;
  font-size: ${Theme.fontSize.tagText};
  background-color: ${Theme.color.tButtonWhite};
  border: none;
  cursor: pointer;
  outline: none;
  transition: all 0.1s ease-in-out;

  :hover {
    background-color: ${Theme.color.tRed};
    color: ${Theme.color.tButtonWhite};
  }
`;

export { DeleteMemberButtonStyled };
