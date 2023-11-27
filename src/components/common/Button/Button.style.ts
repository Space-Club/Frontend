import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const ButtonStyled = styled.button<{
  width: string | number;
  height: string | number;
  outline?: boolean;
}>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}rem` : width)};
  height: ${({ height }) => (typeof height === 'number' ? `${height}rem` : height)};
  outline: none;
  background-color: ${(props) =>
    props.outline ? `${Theme.color.tWhiteGrey}` : `${Theme.color.tButton}`};
  color: ${(props) => (props.outline ? 'black' : 'white')};
  border: ${(props) => (props.outline ? `1px solid ${Theme.color.tButton}` : 'none')};
  border-radius: 0.25rem;
  box-sizing: border-box;
  cursor: pointer;

  user-select: none;
`;

export default ButtonStyled;
