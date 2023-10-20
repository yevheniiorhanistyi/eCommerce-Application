import theme from '../../theme';

const styles = {
  buttonSearch: {
    width: '100%',
    padding: '10px 5px',
  },
  buttonReset: {
    width: '100%',
    padding: '10px 5px',
    color: theme.palette.common.black,
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.common.black,
    },
  },
};

export default styles;
