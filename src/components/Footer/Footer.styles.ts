import * as palette from '@mui/material/colors';
import theme from '../../theme';

const styles = {
  footerContainer: {
    flex: '0 0 auto',
    backgroundColor: theme.palette.common.black,
  },
  toolbar: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '40px 0',
  },
  companySection: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '100%',
    maxWidth: '33.3333%',
    '@media (max-width: 965px)': {
      flexDirection: 'column',
      maxWidth: '80%',
      textAlign: 'center',
      margin: '10px auto',
    },
  },
  storeIcon: {
    display: { xs: 'none', md: 'flex' },
    color: theme.palette.common.white,
    mr: 1,
    mb: 1,
  },
  companyLink: {
    fontWeight: 700,
    letterSpacing: '.3rem',
    lineHeight: 1,
    color: theme.palette.common.white,
    textDecoration: 'none',
    mb: 1,
  },
  companyDescription: {
    fontSize: '.87em',
    color: palette.grey[400],
  },
  navigationSection: {
    ml: 3,
  },
  navigationLink: {
    fontSize: '1rem',
    fontWeight: 700,
    letterSpacing: '.3rem',
    lineHeight: 1,
    color: theme.palette.common.white,
    textDecoration: 'none',
    textTransform: 'uppercase',
    mb: 1,
  },
  navigationItem: {
    fontSize: '.87em',
    fontWeight: 400,
    color: palette.grey[400],
    textDecoration: 'none',
    transition: 'color .2s linear',
    '&:hover': {
      color: palette.grey[50],
    },
    '@media (max-width: 965px)': {
      fontSize: '1.1em',
    },
  },
  storeInfoItem: {
    display: 'flex',
    alignItems: 'center',
  },
};

export default styles;
