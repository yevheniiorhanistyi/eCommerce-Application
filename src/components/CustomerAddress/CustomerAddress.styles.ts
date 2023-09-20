import theme from '../../theme';

const styles = {
  addressItem: {
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
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
    background: theme.palette.grey[200],
  },
};

export default styles;
