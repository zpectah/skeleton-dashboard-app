import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppRouter from './AppRouter';
import { themeDefault } from '../../styles/theme';

const App = () => (
  <ThemeProvider theme={themeDefault}>
    <CssBaseline />
    <AppRouter />
  </ThemeProvider>
);

export default App;
