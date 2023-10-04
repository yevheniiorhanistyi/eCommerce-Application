import theme from '../../theme';

const styles = {
  buttonSearch: {
    width: '100%',
    padding: '10px 5px',
  },
  buttonReset: {
    width: '100%',
    padding: '10px 5px',
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.grey[100],
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.grey[200],
    },
  },
};

export default styles;
