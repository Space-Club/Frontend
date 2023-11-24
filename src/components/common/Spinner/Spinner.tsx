import { SpinnerStyled, SpinnerWrapper } from './Spinner.style';

interface SpinnerProps {
  size?: number;
}

const Spinner = ({ size = 5 }: SpinnerProps) => {
  return (
    <SpinnerWrapper>
      <SpinnerStyled size={size} />
    </SpinnerWrapper>
  );
};

export default Spinner;
