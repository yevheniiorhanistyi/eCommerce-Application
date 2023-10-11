const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '554px',
    maxWidth: 280,
    margin: '0 auto 15px',
    '@media (max-width: 1175px)': {
      margin: '0 20px 15px',
    },
  },
  link: {
    flex: '1 0 auto',
  },
  cardActions: {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 0 auto',
  },
  innerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '280px',
    height: '180px',
    paddingTop: '10px',
  },
  cardMedia: {
    maxWidth: '100%',
    maxHeight: '170px',
    height: 'auto',
    width: 'auto',
  },
  typograohyTitle: {
    fontSize: '1.2rem',
  },
  typographyPrice: {
    margin: '10px auto',
  },
  typographyDiscount: {
    textDecoration: 'line-through',
    marginLeft: '10px',
  },
  buttonCartControl: {
    fontSize: '0.8rem',
    padding: '8px 20px',
  },
};

export default styles;
