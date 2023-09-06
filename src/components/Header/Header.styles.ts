const styles = {
  typo: {
    mr: 2,
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: '#fff',
    textDecoration: 'none',
  },
  typoH6: {
    display: { xs: 'none', md: 'flex' },
  },
  typoH5: {
    display: { xs: 'flex', md: 'none' },
    flexGrow: 1,
  },
  menubar: {
    display: { xs: 'block', md: 'none' },
  },
  storeIconFlex: { display: { xs: 'flex', md: 'none' }, mr: 1 },
  storeIcon: { display: { xs: 'none', md: 'flex' }, mr: 1 },
  navMenuBoxFlex: { flexGrow: 1, display: { xs: 'flex', md: 'none' } },
  navMenuBox: { flexGrow: 1, display: { xs: 'none', md: 'flex' } },
  closeNavMenu: { my: 2, color: 'white', display: 'block' },
  menuBox: { flexGrow: 0 },
  menu: { mt: '45px' },
  popper: {
    zIndex: 1,
  },
};

export default styles;
