import '@emotion/react';
import Theme from './Theme';

type ThemeType = typeof Theme;

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
