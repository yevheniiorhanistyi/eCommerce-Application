import theme from '../../theme';

const styles = {
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    color: theme.palette.error.light,
    margin: 0,
    padding: 0,

    '&:hover': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      color: theme.palette.error.dark,
    },
    '&:active': {
      backgroundColor: 'transparent',
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      color: theme.palette.grey[500],
    },
  },
  buttonText: {
    fontWeight: 'inherit',
  },
};

export default styles;
