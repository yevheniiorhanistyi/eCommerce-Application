const styles = {
  addButton: {
    backgroundColor: 'aliceblue',
    border: 'none',
    color: '#07c',

    fontWeight: 700,
    textTransform: 'uppercase',
    lineHeight: 1.75,
    padding: '0 18px 0 5px',
    margin: '0px',
    borderRadius: '3px',
    height: '30px',
    width: '90px',

    '&:hover': {
      border: 'none',
    },

    '@media (max-width: 450px)': {
      minWidth: 45,
    },
    '@media (max-width: 395px)': {
      minWidth: 10,
      fontSize: 0,
    },
  },
  addIcon: {
    '@media (max-width: 450px)': {
      display: 'none',
    },
    '@media (max-width: 395px)': {
      display: 'block',
    },
  },
};

export default styles;
