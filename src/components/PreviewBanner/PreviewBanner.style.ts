import * as palette from '@mui/material/colors';

const styles = {
  outerBox: {
    width: '100%',
    height: '88vh',
    position: 'relative',
    overflow: 'hidden',
  },
  img: {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    transform: 'scale(1.2)',
    opacity: 0,
  },
  innerBox: {
    minWidth: '225px',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  title: {
    width: '100%',
    fontSize: '1.5rem',
    fontWeight: '600',
    letterSpacing: '.1em',
    color: '#fff',
    '@media (max-width: 560px)': {
      fontSize: '1.2rem',
    },
  },
  button: {
    fontSize: '0.8rem',
    maxWidth: '140px',
    padding: '10px 30px',
    margin: '15px auto',
    border: '2px solid #fff',
    borderRadius: '0',
    color: palette.common.white,
    transition: 'box-shadow .3s linear',
    '&:hover': {
      backgroundColor: 'transparent',
      boxShadow: '0px 0px 10px 0px #fff',
    },
    '@media (max-width: 560px)': {
      fontSize: '0.6rem',
      padding: '8px 25px',
    },
  },
};

export default styles;
