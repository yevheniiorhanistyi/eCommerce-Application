const styles = {
  paper: {
    height: 'auto',
    margin: '50px',
    py: {
      xs: 2,
      md: 4,
    },
    px: {
      xs: 3,
      md: 6,
    },

    '@media (max-width: 400px)': {
      margin: '10px',
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    padding: 0,
  },
};

export default styles;
