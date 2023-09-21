import theme from '../../theme';

const styles = {
  image: {
    display: 'block',
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    margin: '0 auto',
  },
  imageWrap: {
    height: '100%',
  },
  sliderView: {
    p: 0.5,
    border: `1px solid ${theme.palette.divider}`,
  },
  tittleBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    p: 1,
  },
};

export default styles;
