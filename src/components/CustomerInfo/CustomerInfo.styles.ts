import theme from '../../theme';

const styles = {
  innerContainer: {
    backgroundColor: theme.palette.common.white,
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
  firstNameContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  flexBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
};

export default styles;
