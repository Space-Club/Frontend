import { HTMLAttributes } from 'react';

import ButtonStyled from './Button.style';

interface Button extends HTMLAttributes<HTMLButtonElement> {
  width?: string | number;
  height?: string | number;
  buttonText: string;
  buttonType?: 'submit' | 'button' | 'reset';
  outline?: boolean;
}

const Button = ({
  buttonText,
  buttonType = 'submit',
  width = 6,
  height = 2,
  outline,
  onClick,
  ...props
}: Button) => {
  return (
    <ButtonStyled
      type={buttonType}
      width={width}
      height={height}
      outline={outline}
      onClick={onClick}
      {...props}
    >
      {buttonText}
    </ButtonStyled>
  );
};

export default Button;
