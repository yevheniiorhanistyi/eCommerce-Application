import theme from '../../theme';

const styles = {
  listItem: {
    width: '100%',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '7px 0 20px 0',
    borderBottom: '1px solid #ebedf0',

    '@media (max-width: 370px)': {
      flexDirection: 'column',
      justifyContent: 'flex-start',
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
    maxHeight: '145px',
    width: 'auto',
    height: 'auto',
  },
  typographyTitle: {
    fontSize: '1.2rem',
  },
  crossedPrice: {
    color: theme.palette.grey[500],
    fontSize: '12px',
    textDecoration: 'line-through',
  },
  descriptionPrices: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  itemPricesWrapper: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0',
    minWidth: '100px',
    width: '90px',

    '@media (min-width: 870px) and (max-width: 1000px)': {
      width: '100%',
    },

    '@media (max-width: 650px)': {
      width: '100%',
    },

    '@media (max-width: 500px)': {
      order: 1,
    },
  },
  originalPrice: {
    fontWeight: '700',
  },
  cartItemDescription: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',

    '@media (max-width: 870px)': {
      flexDirection: 'initial',
      alignItems: 'flex-start',
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
  captionDescription: {
    width: '250px',
    '@media (min-width: 870px) and (max-width: 1000px)': {
      width: '100%',
    },

    '@media (max-width: 650px)': {
      width: '100%',
    },

    '@media (max-width: 500px)': {
      order: 2,
    },
  },
  quantityWrap: {
    display: 'flex',

    '@media (min-width: 500px) and (max-width: 1200px)': {
      width: '50%',
      order: 2,
      justifyContent: 'flex-end',
    },

    '@media (min-width: 371px) and (max-width: 500px)': {
      width: '100%',
      order: 3,
      justifyContent: 'flex-end',
    },

    '@media (max-width: 370px)': {
      width: 'auto',
      alignSelf: 'center',
      justifyContent: 'flex-end',
      order: 4,
    },
  },
  deleteWrap: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',

    '@media (min-width: 500px) and (max-width: 1200px)': {
      width: '50%',
      order: 1,
      justifyContent: 'flex-start',
    },

    '@media (max-width: 500px)': {
      justifyContent: 'flex-start',
      order: 4,
    },

    '@media (max-width: 370px)': {
      width: 'auto',
      alignSelf: 'center',
      justifyContent: 'flex-start',
      order: 3,
    },
  },
};

export default styles;
