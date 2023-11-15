import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const ButtonStyled = styled.div<{ isCanceled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.3rem;
  height: 1.5rem;
  color: ${Theme.color.tSeparator};
  background-color: ${Theme.color.white};
  border: ${({ isCanceled: isCanceled }) =>
    isCanceled ? 'none' : `1px solid ${Theme.color.tSeparator}`};
  border-radius: ${({ isCanceled: isCanceled }) => (isCanceled ? '0' : '0.3rem')};
  font-size: ${Theme.fontSize.tagText};
  cursor: pointer;
`;

const ButtonTextStyled = styled.span`
  word-break: keep-all;
  text-align: center;
`;

export { ButtonStyled, ButtonTextStyled };
