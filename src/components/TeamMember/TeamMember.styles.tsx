import theme from '../../theme';

const styles = {
  container: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '102%',
    marginBottom: '30px',
    padding: '35px',
    display: 'flex',
    boxShadow: '0 4px 16px rgba(6,10,13,.06), 0 1px 4px rgba(6,10,13,.08)',

    '@media (max-width: 800px)': {
      flexDirection: 'column',
      padding: '15px',
      gap: '20px',
    },
  },
  image: {
    '@media (max-width: 800px)': {
      display: 'flex',
      justifyContent: 'center',
    },

    img: {
      borderRadius: '50%',
    },
  },
  icon: {
    '&:hover': {
      animation: 'jerking 0.5s ease',
      animationIterationCount: '1',
    },

    '@keyframes jerking': {
      '15%': { transform: 'translateX(8px)' },
      '30%': { transform: 'translateX(-8px)' },
      '40%': { transform: 'translateX(5px)' },
      '50%': { transform: 'translateX(-5px)' },
      '65%': { transform: 'translateX(2px)' },
      '100%': { transform: 'translateX(0)' },
    },
  },
  links: {
    display: 'flex',
    gap: '8px',
  },
  name: {
    fontWeight: 400,
    marginBottom: '5px',
    fontSize: '24px',
  },
  role: {
    marginBottom: '9px',
    fontSize: '18px',
    color: theme.palette.grey[500],
  },
  bio: {
    marginBottom: '4px',
    color: theme.palette.grey[800],
    textAlign: 'justify',
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end',

    '@media (max-width: 800px)': {
      justifyContent: 'center',
    },
  },
};

export default styles;
