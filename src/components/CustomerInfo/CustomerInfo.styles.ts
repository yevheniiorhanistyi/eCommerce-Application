const styles = {
  mainCustomerInfo: {
    mt: 1,
    mb: 2,
    p: 0,

    '@media (max-width: 650px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  addressItem: {

    '@media (max-width: 650px)': {
      flexDirection: 'column',
      alignItems: 'baseline',
    },
  },
  addressItemData: {
    display: 'flex',
    flexDirection: 'column',
    width: '20%',

    '@media (max-width: 650px)': {
      flexDirection: 'row',
    },
  },
  addressItemDataLabel: {
    minWidth: '90px',
    marginRight: '10px',
  },
  addressesTitle: {
    '@media (max-width: 650px)': {
      textAlign: 'center',
    },
  },
};

export default styles;
