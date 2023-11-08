import ButtonStyled from './Button.style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string | number;
  height?: string | number;
  buttonText: string;
  outline?: boolean;
}

const Button = ({ buttonText, width = 6, height = 2, outline, ...props }: ButtonProps) => {
  return (
    <ButtonStyled width={width} height={height} outline={outline} {...props}>
      {buttonText}
    </ButtonStyled>
  );
};

export default Button;
