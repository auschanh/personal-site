import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { teal, grey } from '@mui/material/colors';
import Button from '@mui/material/Button';

export const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: grey[400],
    },
  },
});


