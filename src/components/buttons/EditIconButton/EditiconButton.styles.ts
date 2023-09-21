import theme from '../../../theme';

const styles = {
  editButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    width: '32px',
    height: '32px',
    fill: 'none',
    color: theme.palette.primary.dark,
    borderRadius: '50%',
    borderColor: 'transparent',
    padding: 0,
    paddingLeft: '12px',
    minWidth: '32px',

    '&:hover': {
      borderColor: 'transparent',
    },
  },
  editButtonIcon: {
    margin: 0,
    position: 'relative',
  },
};

export default styles;
