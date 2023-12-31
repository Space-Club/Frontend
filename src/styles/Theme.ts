import { keyframes } from '@emotion/react';

const color = {
  white: '#fff',
  black: '#000000',
  kakaoYellow: '#FEE500',
  red: '#FF0000',
  gray: '#d9d9d9',
  semiBlack: '#595959',
  indigo: '#003949',
  logoTextColor: '#fafafa',
  lineColor: '#261359',
  tLine: '#3D186C',
  tGreen: '#8CB79A',
  tSemiGreen: '#B6D0BE',
  tPurple: '#7B5BA5',
  tSemiPurple: '#AC99C5',
  calendarHover: '#E0D6F5',
  tPink: '#B28FB9',
  tSemiPink: '#CDB8D1',
  tBlue: '#4B6184',
  tSemiBlue: '#8F9CB1',
  tRed: '#BC1584',
  tIndigo: '#163143',
  tGrayBlue: '#5C5F90',
  tActive: '#6433CD',
  tButton: '#775D98',
  tSeparator: '#CDCCCC',
  textGrey: '#909090',
  tSemiWhite: '#EEE',
  tButtonWhite: '#F9F9F9',
  activeColor: '#6433CD',
  logo_2: 'linear-gradient(175deg, #031f2b -19.45%, #486282 55.68%, #9458b5 117.93%)',
  tWhiteGrey: '#EFEFF4',
  tSemiActive: '#9370DC',
  idkGrey: '#CCCCCC',
  dropDownBackground: '#F7F6F6',
  clubCoverTransparent: 'rgba(0, 0, 0, 0.25)',
  sidebarBackground: 'rgba(239, 239, 244, 0.2)',
  shadow: 'rgba(0, 0, 0, 0.25)',
  sideScrollBarThumb: 'rgba(239, 239, 244, 0.2)',
  sideScrollBarTrack: 'rgba(239, 239, 244, 0.1)',
  sidebarColor: '#EFEFF4',
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
  spin: keyframes`
    0% {transform: rotate(0deg)};
    100% {transform: rotate(360deg)};
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

const shadow = {
  all: 'drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25))',
};

const Theme = {
  color,
  componentStyle,
  keyframe,
  fontSize,
  shadow,
};

export default Theme;
