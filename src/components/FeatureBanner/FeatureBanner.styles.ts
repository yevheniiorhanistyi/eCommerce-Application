const styles = {
  outerBox: {
    width: '100%',
    height: '60vh',
    position: 'relative',
  },
  image: {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  innerBox: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    width: '100%',
    maxWidth: '800px',
    padding: '0 15px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: '400',
    letterSpacing: '.1em',
    width: '100%',
    color: '#fff',
    '@media (max-width: 720px)': {
      fontSize: '2rem',
    },
    '@media (max-width: 520px)': {
      fontSize: '1.5rem',
      letterSpacing: '0',
    },
  },
  subtitle: {
    fontSize: '1rem',
    lineHeight: '1.2em',
    '@media (max-width: 1840px)': {
      fontSize: '1rem',
    },
    '@media (max-width: 520px)': {
      fontSize: '.8rem',
    },
  },
};

export default styles;
