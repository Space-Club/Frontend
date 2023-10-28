import { ActiveButtonProps } from '@/types/components';

import { ButtonStyled } from './ActiveButton.style';

const ActiveButton = ({ buttonText, fontSize }: ActiveButtonProps) => {
  return <ButtonStyled fontSize={fontSize}>{buttonText}</ButtonStyled>;
};

export default ActiveButton;
