const styles = {
  addressItem: {
    borderBottom: '1px solid #ebedf0',
    '@media (max-width: 650px)': {
      flexDirection: 'column',
      alignItems: 'baseline',
    },
    '&:hover > :last-child': {
      opacity: 1,
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
  separator: {
    height: '20px',
    width: '1px',
    margin: '0 8px',
    background: '#ebedf0',
  },
};

export default styles;
