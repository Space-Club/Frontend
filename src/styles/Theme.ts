import { keyframes } from '@emotion/react';

const color = {
  white: '#ffffff',
  black: '#000000',
  kakaoYellow: '#FEE500',
  red: '#FF0000',
  gray: '#d9d9d9',
  semiBlack: '#595959',
  indigo: '#003949',
  logoTextColor: '#fafafa',
  lineColor: '#261359',
  tGreen: '#8CB79A',
  tPurple: '#7B5BA5',
  tPink: '#B28FB9',
  tBlue: '#4B6184',
  tRed: '#BC1584',
  tIndigo: '#163143',
  tGrayBlue: '#5C5F90',
  tActive: '#6433CD',
  tSeparator: '#CDCCCC',
  logo_2: 'linear-gradient(175deg, #031f2b -19.45%, #486282 55.68%, #9458b5 117.93%)',
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
