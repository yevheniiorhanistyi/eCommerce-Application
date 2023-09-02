import theme from '../../theme';

const styles = {
  imageWrap: {
    position: 'relative',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundSize: 'contain',
  },
  hover: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fill: theme.palette.primary.main,
    fontSize: 148,
    pointerEvents: 'none',
    opacity: 0,
    transition: `opacity ${theme.transitions.duration.standard}ms`,
  },
};

export default styles;
