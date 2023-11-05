import React, { HTMLAttributes } from 'react';

import ButtonStyled from './Button.style';

interface Button extends HTMLAttributes<HTMLButtonElement> {
  width?: string | number;
  height?: string | number;
  buttonText: string;
  buttonType?: 'submit' | 'button' | 'reset';
}

const Button = ({
  buttonText,
  buttonType = 'submit',
  width = 6,
  height = 2,
  onClick,
  ...props
}: Button) => {
  return (
    <ButtonStyled type={buttonType} width={width} height={height} onClick={onClick} {...props}>
      {buttonText}
    </ButtonStyled>
  );
};

export default Button;
