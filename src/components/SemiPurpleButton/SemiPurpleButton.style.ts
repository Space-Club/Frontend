import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const SemiPurpleButton = styled.button<{ width?: string; reverse?: boolean; bold?: boolean }>`
  outline: none;
  width: ${({ width }) => width};
  background-color: ${({ reverse }) => (reverse ? 'white' : `${Theme.color.tSemiActive}`)};
  color: ${({ reverse }) => (reverse ? `${Theme.color.tSemiActive}` : 'white')};
  border: ${({ bold }) => (bold ? '3px' : '1px')} solid ${Theme.color.tSemiActive};
  border-radius: 0.25rem;
  padding: 0.5rem 2rem;
  box-sizing: border-box;
  cursor: pointer;
`;

export { SemiPurpleButton };
