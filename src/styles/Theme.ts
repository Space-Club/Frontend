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
  lineColor: '#261359',
  tLine: '#3D186C',
  tButton: '#775D98',
  tSemiActive: '#9370DC',
  tSeparator: '#CDCCCC',
  activeColor: '#6433CD',
  logo_2: 'linear-gradient(175deg, #031f2b -19.45%, #486282 55.68%, #9458b5 117.93%)',
  tWhiteGrey: '#EFEFF4',
  idkGrey: '#CCCCCC',
  tSemiActive: '#9370DC',
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

const fontSize = {
  extraTitle: '2.5rem',
  largeTitle: '2.125rem',
  mediumTitle: '1.75rem',
  smallTitle: '1.375rem',
  largeContent: '1.125rem',
  mediumContent: '1rem',
  smallContent: '0.875rem',
  tagText: '0.625rem',
};

const Theme = {
  color,
  componentStyle,
  keyframe,
  fontSize,
};

export default Theme;
