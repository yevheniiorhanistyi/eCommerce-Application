import theme from '../../theme';

const styles = {
  outerBox: {
    display: 'flex',
    flexDirection: 'column',
    padding: '5px 10px',
  },
  list: {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  },
  icon: {
    margin: '0 10px',
    color: theme.palette.primary.dark,
  },
  typographyUserData: {
    fontSize: '0.875rem',
    fontWeight: '600',
  },
  typographyUserMail: {
    fontSize: '0.875rem',
    fontWeight: '400',
    lineHeight: '1',
    color: '#637381',
    mb: '10px',
  },
  button: {
    padding: '5px 0',
    minWidth: '120px',
  },
  buttonAuthenticated: {
    padding: '5px 2px',
    minWidth: '150px',
  },
};

export default styles;
