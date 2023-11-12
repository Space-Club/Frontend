import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const LoginButtonStyled = styled.button`
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 1.6rem;
  border: 0;
  border-radius: 0.3rem;
  background: rgba(239, 239, 244, 0.2);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }
`;

const TextStyled = styled.span`
  word-break: keep-all;
  font-size: ${Theme.fontSize.tagText};
  color: white;
`;

export { LoginButtonStyled, TextStyled };
