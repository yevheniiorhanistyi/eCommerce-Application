const styles = {
  addressItem: {
    borderBottom: '1px solid #ebedf0',
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
};

export default styles;
