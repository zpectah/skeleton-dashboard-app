import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import palette from '../../styles/palette';
import AppRouter from './AppRouter';

const theme = createTheme({
  palette: {
    primary: {
      main: palette.primary,
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppRouter />
  </ThemeProvider>
);

export default App;
