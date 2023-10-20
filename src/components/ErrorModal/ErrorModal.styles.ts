import theme from '../../theme';

const styles = {
  box: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: '500px',
    backgroundColor: theme.palette.common.white,
    p: 3,
    borderRadius: 0,
    transform: 'translate(-50%, -50%)',
    '@media (max-width:500px)': {
      width: '100%',
    },
  },
  button: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '10px 40px',
  },
};

export default styles;
