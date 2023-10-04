import theme from '../../../theme';

const styles = {
  setDefaultButton: {
    padding: 0,
    margin: 0,
    color: theme.palette.common.black,
    transition: '.2s ease',

    '@media (max-width: 450px)': {
      minWidth: 45,
    },
    '@media (max-width: 395px)': {
      minWidth: 10,
      fontSize: 0,
    },
  },
};

export default styles;
