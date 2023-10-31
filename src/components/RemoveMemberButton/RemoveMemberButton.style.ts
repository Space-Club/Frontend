import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const RemoveMemberButtonStyled = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 1.8125rem;
  height: 1.25rem;
  border-radius: 0.3125rem;
  font-size: ${Theme.fontSize.tagText};
  background-color: ${Theme.color.tWhiteButton};
  border: none;
`;

export { RemoveMemberButtonStyled };
