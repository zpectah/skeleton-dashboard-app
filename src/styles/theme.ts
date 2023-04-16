import { createTheme } from '@mui/material/styles';
import palette from '../styles/palette';

const themeDefault = createTheme({
  palette: {
    primary: {
      main: palette.primary,
    },
  },
});

export { themeDefault };
