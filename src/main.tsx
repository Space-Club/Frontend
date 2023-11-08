import { Global, ThemeProvider } from '@emotion/react';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import GlobalStyle from '@styles/GlobalStyle';
import Theme from '@styles/Theme';

import { ToastContextProvider } from './context/ToastContext';
import { worker } from './mocks/worker';
import router from './routes/router';

if (import.meta.env.VITE_USER_NODE_ENV === 'development') {
  worker.start();
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <ToastContextProvider>
          <Global styles={GlobalStyle} />
          <RouterProvider router={router} />
        </ToastContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
