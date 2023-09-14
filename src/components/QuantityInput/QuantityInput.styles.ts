const styles = {
  wraper: {
    alignItems: 'center',
  },
  textField: {
    width: 40,
    input: {
      textAlign: 'center',
      appearance: 'none',
    },
    '& .MuiInputBase-root': {
      '&::before': {
        borderBottomColor: 'transparent',
      },
    },
  },
  helperText: {},
};

export default styles;
