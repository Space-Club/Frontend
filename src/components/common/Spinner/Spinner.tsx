import { SpinnerStyled } from './Spinner.style';

interface SpinnerProps {
  size?: number;
}

const Spinner = ({ size = 5 }: SpinnerProps) => {
  return <SpinnerStyled size={size} />;
};

export default Spinner;
