const styles = {
  outerBox: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
  },
  filterSidebarBox: {
    paddingTop: '96px',
  },
  innerBox: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 0',
    '@media (max-width: 870px)': {
      flexDirection: 'column-reverse',
      alignItems: 'flex-end',
    },
  },
};

export default styles;
