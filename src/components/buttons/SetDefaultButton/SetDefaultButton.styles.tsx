const styles = {
  setDefaultButton: {
    margin: 0,
    padding: 0,
    color: '#07c',
    opacity: 0,
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
