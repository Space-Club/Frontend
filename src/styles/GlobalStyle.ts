import { css } from '@emotion/react';

const GlobalStyle = css`
  * {
    margin: 0;
    padding: 0;
    font-family: 'MainRegular', sans-serif;
    box-sizing: border-box;
  }

  body {
  }

  #root {
    min-height: 100vh;
    width: 100%;
  }

  #overlays {
    position: fixed;
    z-index: 100;
  }
`;

export default GlobalStyle;
