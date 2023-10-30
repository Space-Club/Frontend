import { ActiveButtonProps } from '@/types/components';

import { ButtonStyled } from './ActiveButton.style';

const ActiveButton = ({ buttonText, fontSize, isLoading = false, ...props }: ActiveButtonProps) => {
  return (
    <ButtonStyled fontSize={fontSize} {...props}>
      {isLoading ? '클럽 생성중...' : `${buttonText}`}
    </ButtonStyled>
  );
};

export default ActiveButton;
