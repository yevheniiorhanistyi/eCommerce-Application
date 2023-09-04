const styles = {
  listItem: {
    borderBottom: '1px solid #ebedf0',
    borderTop: '1px solid #ebedf0',
    '@media (max-width: 650px)': {
      flexDirection: 'column',
      alignItems: 'baseline',
    },
  },
  separator: {
    height: '20px',
    width: '1px',
    margin: '0 8px',
    background: '#ebedf0',
  },
};

export default styles;
