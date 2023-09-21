import theme from '../../theme';

const styles = {
  listItem: {
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    borderTop: `1px solid ${theme.palette.grey[200]}`,
    '@media (max-width: 650px)': {
      flexDirection: 'column',
      alignItems: 'baseline',
    },
  },
  separator: {
    height: '20px',
    width: '1px',
    margin: '0 8px',
    background: theme.palette.grey[200],
  },
};

export default styles;
