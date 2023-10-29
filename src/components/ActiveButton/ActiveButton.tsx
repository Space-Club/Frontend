import { ActiveButtonProps } from '@/types/components';

import { ButtonStyled } from './ActiveButton.style';

const ActiveButton = ({ buttonText, fontSize, ...props }: ActiveButtonProps) => {
  return (
    <ButtonStyled fontSize={fontSize} {...props}>
      {buttonText}
    </ButtonStyled>
  );
};

export default ActiveButton;
