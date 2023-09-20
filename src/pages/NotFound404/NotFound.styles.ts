import theme from '../../theme';

const styles = {
  outerBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexGrow: 1,
    backgroundColor: theme.palette.grey[600],
  },
  title: {
    color: theme.palette.common.white,
  },
  subtitle: {
    color: theme.palette.common.white,
  },
  button: {
    marginTop: '15px',
  },
};

export default styles;
