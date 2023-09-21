import theme from '../../theme';

const styles = {
  price: {
    alignSelf: 'center',
  },
  discountPrice: {
    mb: '0.1em',
    fontSize: '1.2em',
    color: theme.palette.accent.main,
  },
  oldPrice: {
    fontSize: '0.6em',
    textDecoration: 'line-through',
    color: theme.palette.grey[500],
    alignSelf: 'flex-end',
  },
  priceWrap: {
    alignSelf: 'center',
    fontSize: 28,
  },
  discountPriceWrap: {
    display: 'flex',
    flexDirection: 'column',
    // columnGap: '0.6em',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default styles;
