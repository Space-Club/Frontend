import { css } from '@emotion/react';

const GlobalStyle = css`
  @font-face {
    font-family: 'LogoFont';
    src: url('src/assets/fonts/Giants-Inline.ttf') format('opentype');
  }
  @font-face {
    font-family: 'MainBold';
    src: url('src/assets/fonts/LINESeedKR-Bd.woff') format('woff');
  }
  @font-face {
    font-family: 'MainRegular';
    src: url('src/assets/fonts/LINESeedKR-Rg.woff') format('woff');
  }
  @font-face {
    font-family: 'MainThin';
    src: url('src/assets/fonts/LINESeedKR-Th.woff') format('woff');
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
