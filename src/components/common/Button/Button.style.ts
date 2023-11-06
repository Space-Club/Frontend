import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const ButtonStyled = styled.button<{ width: string | number; height: string | number }>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}rem` : width)};
  height: ${({ height }) => (typeof height === 'number' ? `${height}rem` : height)};
  outline: none;
  background-color: ${Theme.color.tButton};
  color: white;
  border: 1px solid ${Theme.color.tButton};
  border-radius: 0.25rem;
  box-sizing: border-box;
  cursor: pointer;
`;

export default ButtonStyled;
