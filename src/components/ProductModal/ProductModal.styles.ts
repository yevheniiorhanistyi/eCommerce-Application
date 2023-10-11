import theme from '../../theme';

const styles = {
  buttonClose: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
  },
  box: {
    position: 'fixed',
    top: '1vh',
    left: '1vw',
    right: '1vw',
    bottom: '1vh',
    padding: 1,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 0,
  },
};

export default styles;
