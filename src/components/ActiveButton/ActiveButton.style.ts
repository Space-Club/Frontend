import Theme from '@/styles/Theme';
import { ActiveButtonProps } from '@/types/components';
import { getFontSize } from '@/utils/getFontSize';
import styled from '@emotion/styled';

const ButtonStyled = styled.button<{ fontSize: ActiveButtonProps['fontSize'] }>`
  padding: 0.8rem 1rem;
  border: 0;
  border-radius: 0.5rem;
  background-color: ${Theme.color.tSemiActive};
  color: white;
  font-size: ${(props) => getFontSize(props.fontSize)};
`;

export { ButtonStyled };
