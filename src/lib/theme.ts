'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1a3d63',
      light: '#2c5a86',
      dark: '#0f2740',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#5d8f66',
      light: '#7aaa82',
      dark: '#3f6646',
    },
    background: {
      default: '#f7f8f6',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a2a33',
      secondary: '#5a6a70',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700, letterSpacing: '-0.03em' },
    h2: { fontWeight: 700, letterSpacing: '-0.02em' },
    h3: { fontWeight: 650, letterSpacing: '-0.02em' },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, padding: '10px 22px' },
        contained: { boxShadow: 'none', '&:hover': { boxShadow: 'none' } },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          boxShadow: '0 1px 2px rgba(16,40,60,0.06), 0 8px 24px rgba(16,40,60,0.06)',
          border: '1px solid #e8ece9',
        },
      },
    },
  },
});

export default theme;
