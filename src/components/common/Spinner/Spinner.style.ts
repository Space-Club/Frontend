import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40vh;
`;

const SpinnerStyled = styled.div<{ size: number }>`
  width: ${({ size }) => `${size}rem`};
  height: ${({ size }) => `${size}rem`};
  border: 0.5rem solid ${Theme.color.tWhiteGrey};
  border-top: 0.5rem solid ${Theme.color.idkGrey};
  border-radius: 50%;

  animation: ${Theme.keyframe.spin} 2s linear infinite;
`;

export { SpinnerStyled, SpinnerWrapper };
