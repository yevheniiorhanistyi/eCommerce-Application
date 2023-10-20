import theme from '../../theme';

const styles = {
  paper: { elevation: 0, p: 3, mt: 7, mb: 4 },
  title: {
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    padding: '10px',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 870px)': {
      flexDirection: 'column',
    },
  },
  box60: {
    width: '60%',
    '@media (max-width: 870px)': {
      width: '100%',
    },
  },
  innerBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 0',
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    '@media (max-width: 370px)': {
      flexDirection: 'column',
    },
  },
  imageSkeleton: {
    width: '150px',
    height: '150px',
  },
  contentBox: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '15px',
    '@media (max-width: 370px)': {
      width: '100%',
      marginLeft: '0',
    },
  },
  contentSkeleton: {
    width: '100%',
    height: '70px',
    '@media (max-width: 1200px)': {
      height: '130px',
    },
    '@media (max-width: 870px)': {
      width: '100%',
    },
    '@media (max-width: 370px)': {
      width: '100%',
      marginLeft: '0',
    },
  },
  infoSkeleton: {
    width: '100px',
    height: '30px',
    alignSelf: 'end',
    '@media (max-width: 1200px)': {
      display: 'none',
    },
  },
  box35: {
    width: '35%',
    '@media (max-width: 870px)': {
      width: '70%',
      alignSelf: 'center',
    },
  },
  infoPaper: {
    elevation: 1,
    borderRadius: '8px',
    padding: '15px 15px 10px',
    mt: 2,
    mb: 2,
  },
  infoSkeleton1: {
    width: '40%',
    height: 40,
  },
  infoSkeleton2: {
    width: '100%',
    height: 100,
  },
  bottomBox: {
    display: 'flex',
    justifyContent: 'end',
  },
  bottomSkeleton: {
    width: '120px',
    height: 50,
  },
};

export default styles;
