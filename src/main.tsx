import { Global, ThemeProvider } from '@emotion/react';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import GlobalStyle from '@styles/GlobalStyle';
import Theme from '@styles/Theme';

import router from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Global styles={GlobalStyle} />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
