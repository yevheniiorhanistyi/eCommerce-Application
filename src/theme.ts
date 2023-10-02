import { createTheme } from '@mui/material/styles';
import * as palette from '@mui/material/colors';

const theme = createTheme({
  palette: {
    accent: {
      main: '#d32f2f',
    },
    primary: {
      main: '#000',
    },
  },
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
    h2: {
      fontSize: '1.75rem',
      fontWeight: 400,
      textAlign: 'center',
      marginBottom: '0.35em',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
      display: 'block',
      margin: '0 auto',
      color: palette.grey[900],
      lineHeight: 1.167,
      textTransform: 'uppercase',
      textAlign: 'center',
      marginBottom: '0.35em',
    },
    caption: {
      fontSize: 'inherit',
      fontWeight: 400,
      lineHeight: 1.167,
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
          color: palette.common.black,
          backgroundColor: 'transparent',
          minWidth: 64,
          padding: '16px 40px',
          margin: '24px 0 16px',
          borderRadius: 0,
          transition: 'all .2s linear',
          '&:hover': {
            color: palette.common.white,
            backgroundColor: palette.common.black,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& input[type="password"]': {
            fontFamily: 'Roboto',
          },
          borderRadius: 0,
        },
      },
    },
  },
});

export default theme;
