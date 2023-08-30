import theme from '../../theme';

const styles = {
  price: {
    alignSelf: 'center',
  },
  discountPrice: {
    color: theme.palette.primary.main,
  },
  oldPrice: {
    fontSize: '0.8em',
    textDecoration: 'line-through',
    color: theme.palette.primary.light,
  },
  priceWrap: {
    alignSelf: 'center',
    fontSize: 28,
  },
  discountPriceWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: '1em',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default styles;
