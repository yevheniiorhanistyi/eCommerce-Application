const styles = {
  button: {
    fontWeight: 700,
    textTransform: 'uppercase',
    lineHeight: 1.75,
    color: '#fff',
    minWidth: 94,
    padding: '3px 3px',
    margin: '0 10px',
    borderRadius: '8px',

    '@media (max-width: 450px)': {
      minWidth: 45,
    },
    '@media (max-width: 395px)': {
      minWidth: 10,
      fontSize: 0,
    },
  },
  loginIcon: {
    '@media (max-width: 450px)': {
      display: 'none',
    },
    '@media (max-width: 395px)': {
      display: 'block',
    },
  },
};

export default styles;
