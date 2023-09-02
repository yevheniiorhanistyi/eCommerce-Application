const styles = {
  menuItem: {
    display: 'none',
    visibility: 'hidden',
  },
  contentBox: {
    m: 1,
    minWidth: 120,
    padding: '10px 5px 0',
    textAlign: 'center',
  },
  inputBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto 10px',
  },
  sliderBox: {
    padding: '0 15px',
  },
  outlinedInput: {
    width: 'calc(50% - 5px)',
    height: '40px',
    padding: '5px 10px',
    '& .MuiOutlinedInput-input': {
      padding: '5px 3px',
    },
  },
};

export default styles;
