import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home.tsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)