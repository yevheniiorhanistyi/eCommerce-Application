import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Urbanist',
      'Roboto',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h3: {
      fontSize: 32,
      fontWeight: 700,
      display: 'block',
      margin: '0 auto',
      color: '#242424',
      lineHeight: 1.167,
      textTransform: 'uppercase',
      textAlign: 'center',
      marginBottom: '0.35em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          textTransform: 'uppercase',
          lineHeight: 1.75,
          color: '#fff',
          width: '100%',
          minWidth: 64,
          padding: '16px 40px',
          margin: '24px 0 16px',
          borderRadius: '8px',
        },
      },
    },
  },
});

export default theme;
