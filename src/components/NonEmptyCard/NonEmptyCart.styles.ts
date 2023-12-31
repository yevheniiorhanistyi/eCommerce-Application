import theme from '../../theme';

const styles = {
  wrapper: {
    display: 'flex',

    '@media (max-width: 870px)': {
      flexDirection: 'column',
    },
  },
  rightSideWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    boxShadow: '0 4px 16px rgba(6,10,13,.06), 0 1px 4px rgba(6,10,13,.08)',
    borderRadius: '12px',
    height: '150px',
    padding: '10px',
    marginBottom: '15px',
  },
  summaryWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    paddingBottom: '10px',
  },
  summaryTitle: {
    fontSize: '1.4rem',
    fontWeight: 700,
  },
  summaryValue: {
    fontSize: '20px',
    fontWeight: 700,
  },
  rightSide: {
    width: '55%',

    '@media (max-width: 870px)': {
      width: '80%',
    },

    '@media (max-width: 370px)': {
      width: '100%',
    },
  },
  promocode: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  promoInput: {
    width: '100%',
  },
  itemsCountWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '3px 0',
  },
  itemsCountTitle: {
    fontSize: '14px',
  },
  itemsCountValue: {
    fontSize: '16px',
    fontWeight: 700,
  },
  discountWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '3px 0',
  },
  discountTitle: {
    color: theme.palette.error.light,
    fontSize: '14px',
  },
  discounValue: {
    color: theme.palette.error.light,
    fontSize: '16px',
    fontWeight: 700,
  },
  clearWrap: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    paddingTop: '30px',
  },
};

export default styles;
