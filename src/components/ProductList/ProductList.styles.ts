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
    justifyContent: 'space-between',

    '@media (max-width: 1175px)': {
      justifyContent: 'center',
    },
  },
};

export default styles;
