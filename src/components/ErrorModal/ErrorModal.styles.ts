const styles = {
  modal: {
    left: 'calc(50% - 250px)',
    top: '40%',
    width: 500,
    '@media (max-width:500px)': {
      left: 0,
      top: '20%',
      width: '100%',
    },
  },
  box: {
    backgroundColor: '#fff',
    p: 3,
    borderRadius: 2,
  },
  button: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

export default styles;
