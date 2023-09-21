const styles = {
  circularIndeterminateBox: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  productListBox: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',

    '@media (max-width: 1175px)': {
      justifyContent: 'space-around',
    },
  },
};

export default styles;
