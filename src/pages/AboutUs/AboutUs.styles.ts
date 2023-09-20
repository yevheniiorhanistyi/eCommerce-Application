import theme from '../../theme';

const styles = {
  outerBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexGrow: 1,
  },
  innerBox: {
    width: '90%',
    padding: '30px',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  titleText: {
    margin: '0 15px',

    '@media (max-width: 500px)': {
      fontSize: '20px',
    },

    '@media (max-width: 400px)': {
      fontSize: '15px',
      margin: '0 5px',
    },
  },
  rsschoolLogo: {
    transition: `${theme.transitions.duration.standard}ms ease`,

    '&:hover': {
      filter: 'invert(.2)',
      transform: 'scale(110%)',
    },
  },
};

export default styles;
