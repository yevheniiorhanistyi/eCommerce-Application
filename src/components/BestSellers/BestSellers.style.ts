const styles = {
  outerBox: {
    padding: '20px 10px',
  },
  title: {
    textTransform: 'capitalize',
    mb: '30px',
  },
  innerBox: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card: {
    width: '100%',
    maxWidth: '24%',
    margin: '0 auto 10px',
    borderRadius: '0',
    '@media (max-width: 1198px)': {
      maxWidth: '48%',
    },
    '@media (max-width: 760px)': {
      maxWidth: '300px',
    },
  },
  cardMedia: {
    height: '660px',
    '@media (max-width: 760px)': {
      height: '400px',
    },
  },
};

export default styles;
