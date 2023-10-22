import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Theme from '@styles/Theme';
import GlobalStyle from '@styles/GlobalStyle';

import { Global, ThemeProvider } from '@emotion/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Global styles={GlobalStyle} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
