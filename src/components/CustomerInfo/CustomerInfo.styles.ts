const styles = {
  innerContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '25px',
  },
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
  addressesTitle: {
    '@media (max-width: 650px)': {
      textAlign: 'center',
    },
  },
  addressItemDataLabel: {
    minWidth: '90px',
    marginRight: '10px',
  },
};

export default styles;
