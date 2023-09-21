const styles = {
  spinnerOuterBox: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  spinnerInnerBox: {
    position: 'absolute',
    top: '200px',
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
