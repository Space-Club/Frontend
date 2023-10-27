import { keyframes } from '@emotion/react';

const color = {
  white: '#ffffff',
  black: '#000000',
  kakaoYellow: '#FEE500',
  red: '#FF0000',
  gray: '#d9d9d9',
  indigo: '#003949',
  logoTextColor: '#fafafa',
  lineColor: '#261359',
  confirmedBackground: 'linear-gradient(135deg, #0070F3 0%, rgba(248, 28, 146, 0.60) 100%))',
  pendingBackground: 'linear-gradient(135deg, #4DF171 0%, #FFE91F 100%)',
  paymentPendingBackground: 'linear-gradient(135deg, #FF9431 0%, #FEE793  100%)',
  cancelledBackground: 'linear-gradient(135deg, #FD4F4F  0%, #FFF   100%)',
  cancelRequestPendingBackground: 'linear-gradient(135deg, #FF90E7   0%, #E5D9FF    100%)',
} as const;

const componentStyle = {
  input: {
    borderRadius: '5px',
  },
};

const keyframe = {
  fadeIn: keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }`,
  fadeOut: keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `,
};

const Theme = {
  color,
  componentStyle,
  keyframe,
};

export default Theme;
