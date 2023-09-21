import theme from '../../theme';

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
  button: {
    borderRadius: '50%',
    border: `1px solid ${theme.palette.grey[200]}`,
  },
};

export default styles;
