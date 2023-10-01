import * as palette from '@mui/material/colors';

const styles = {
  outerBox: {
    width: '100%',
    height: '80vh',
    position: 'relative',
  },
  img: {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  innerBox: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: '600',
    letterSpacing: '.1em',
    color: '#fff',
  },
  button: {
    fontSize: '0.8rem',
    maxWidth: '140px',
    padding: '10px 30px',
    margin: '15px auto',
    border: '2px solid #fff',
    borderRadius: '0',
    color: palette.common.white,
  },
};

export default styles;
