const styles = {
  wrapper: {
    display: 'flex',

    '@media (max-width: 750px)': {
      flexDirection: 'column',
    },
  },
  rightSideWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 16px rgba(6,10,13,.06), 0 1px 4px rgba(6,10,13,.08)',
    borderRadius: '12px',
    height: '150px',
    padding: '10px',
    marginBottom: '15px',
  },
  summaryPrice: {
    boxSizing: 'border-box',
    borderBottom: '3px solid #ebedf0',
    borderRadius: '100px',
  },
  summaryTitle: {
    margin: '16px',
  },
  summaryValue: {},
  leftSide: {},
  rightSide: {
    width: '50%',
  },
  promocode: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  promoInput: {
    width: '100%',
  },
};

export default styles;
