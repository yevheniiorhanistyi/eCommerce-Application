const styles = {
  listItem: {
    width: '100%',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '100%',
    width: '100%',
    padding: '7px 0 20px 0',
    borderBottom: '1px solid #ebedf0',

    '@media (max-width: 370px)': {
      flexDirection: 'column',
    },
  },
  innerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '150px',
    height: '150px',
    paddingTop: '10px',
  },
  cardMedia: {
    maxWidth: '100%',
    maxHeight: '100%',
    width: 'auto',
    height: 'auto',
  },
  typographyTitle: {
    fontSize: '1.2rem',
  },
  crossedPrice: {
    color: '#a0a1a3',
    fontSize: '12px',
    textDecoration: 'line-through',
  },
  descriptionPrices: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  itemPricesWrapper: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0',
    minWidth: '100px',
    width: '90px',
  },
  originalPrice: {
    fontWeight: '700',
  },
  cartItemDescription: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '@media (max-width: 870px)': {
      flexDirection: 'initial',
      alignItems: 'flex-start',
    },

    '@media (max-width: 500px)': {
      flexDirection: 'column-reverse',
    },
  },
  cartItemActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  descriptionWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',

    '@media (max-width: 325px)': {
      gap: '5px',
    },
  },
};

export default styles;
