import { keyframes } from '@emotion/react';

const color = {
  //codes for test
  primary: '#03c75a',
  secondary: '#ff5a03',
  white: '#ffffff',
  black: '#000000',
  kakaoYellow: '#FEE500',
  gray: '#d9d9d9',
  indigo: '#003949',
  logoTextColor: '#fafafa',
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
