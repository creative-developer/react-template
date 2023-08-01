import { CssBaseline } from '@mui/material';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { configure } from 'mobx';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
// import * as Sentry from '@sentry/browser';
import { BrowserRouter } from 'react-router-dom';
import 'reflect-metadata';

import { Loader } from '~/components/UI/Loader';
import { theme } from '~/styles/muiTheme';

import { App } from './App';

// StrictMode для Mobx
configure({ enforceActions: 'observed' });

// Sentry для продакшена, отлавливает ошибки приложения, включается перед публикацией
// if (process.env.NODE_ENV === 'production') {
// Sentry.init(appConfig.sentrySettings);
// }

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<Loader isFixed minHeight="100vh" />}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Suspense>
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>,
);
