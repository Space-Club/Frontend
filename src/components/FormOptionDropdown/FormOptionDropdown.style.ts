import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const FormOptionDropdownContainer = styled.div`
  width: 9rem;
`;

const DropdownItemStyled = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  font-size: ${Theme.fontSize.smallContent};
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${Theme.color.gray};
  transition: all 0.1s ease-in-out;
  animation: ${Theme.keyframe.fadeIn} 0.1s ease-in-out;
  cursor: pointer;
  user-select: none;

  :hover {
    background-color: ${Theme.color.tWhiteGrey};
  }
`;

export { FormOptionDropdownContainer, DropdownItemStyled };
