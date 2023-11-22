import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const ButtonStyled = styled.button<{ isCanceled: boolean }>`
  width: 3.3rem;
  height: 1.5rem;
  color: ${Theme.color.tSeparator};
  background-color: ${({ isCanceled }) => (isCanceled ? 'none' : Theme.color.white)};
  border: ${({ isCanceled }) => (isCanceled ? 'none' : `1px solid ${Theme.color.tSeparator}`)};
  border-radius: ${({ isCanceled }) => (isCanceled ? '0' : '0.3rem')};
  font-size: ${Theme.fontSize.tagText};
  cursor: ${({ isCanceled }) => (isCanceled ? 'default' : 'pointer')};
`;

const ButtonTextStyled = styled.span`
  word-break: keep-all;
  text-align: center;
`;

export { ButtonStyled, ButtonTextStyled };
