import theme from '../../../theme';

const styles = {
  deleteButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    width: '32px',
    height: '32px',
    fill: 'none',
    color: theme.palette.accent.main,
    borderRadius: '50%',
    borderColor: 'transparent',
    padding: 0,
    paddingLeft: '12px',
    minWidth: '32px',

    '&:hover': {
      borderColor: 'transparent',
    },
  },
  deleteButtonIcon: {
    margin: 0,
    position: 'relative',
  },
};

export default styles;
