import React, { HTMLAttributes } from 'react';

import ButtonStyled from './Button.style';

interface Button extends HTMLAttributes<HTMLButtonElement> {
  width?: string | number;
  height?: string | number;
  buttonText: string;
}

const Button = ({ buttonText, width = 6, height = 2, onClick, ...props }: Button) => {
  return (
    <ButtonStyled width={width} height={height} onClick={onClick} {...props}>
      {buttonText}
    </ButtonStyled>
  );
};

export default Button;
