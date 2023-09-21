import theme from '../../theme';

const styles = {
  outerBox: {
    display: 'flex',
    flexDirection: 'column',
    mt: 7,
    mb: 12,
  },
  title: {
    fontSize: '2rem',
    fontWeight: 700,
    display: 'block',
    margin: '0 auto',
    color: theme.palette.grey[900],
    lineHeight: 1.167,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: '0.35em',
  },
  subtitle: {
    mb: '1em',
  },
  paper: {
    py: {
      xs: 4,
      md: 8,
    },
    px: {
      xs: 3,
      md: 6,
    },
  },
};

export default styles;
