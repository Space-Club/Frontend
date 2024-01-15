import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const FormOptionDropdownContainer = styled.div`
  position: relative;
  width: 9rem;
`;

const CustomDropdownItemWrapper = styled.div`
  position: absolute;
  right: -7rem;
  bottom: -6rem;
`;

const DropdownItemStyled = styled.div<{ type?: string }>`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  font-size: ${Theme.fontSize.smallContent};
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${Theme.color.gray};
  background-color: white;
  transition: all 0.1s ease-in-out;
  animation: ${Theme.keyframe.fadeIn} 0.1s ease-in-out;
  cursor: pointer;
  user-select: none;

  :hover {
    background-color: ${Theme.color.tWhiteGrey};
  }

  &:before {
    content: '';
    display: ${({ type }) => (type ? 'inline-block' : 'none')};
    margin-right: 0.5rem;
    width: 1rem;
    height: 1rem;
    color: black;
    background-size: cover;
    background-image: ${({ type }) =>
      type === 'TEXT'
        ? 'url(/icon_text.svg)'
        : type === 'NUMBER'
        ? 'url(/icon_number.svg)'
        : type === 'SELECT'
        ? 'url(/icon_dropdown.svg)'
        : type === 'RADIO'
        ? 'url(/icon_one_select.svg)'
        : 'url(/icon_double_select.svg)'};
  }
`;

export { FormOptionDropdownContainer, CustomDropdownItemWrapper, DropdownItemStyled };
