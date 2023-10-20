import * as palette from '@mui/material/colors';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

export const MIN_WINDOW_WIDTH = 965;

export const COMPANY_NAVIGATION_ITEMS = [
  { text: 'Catalog', link: '/catalog' },
  { text: 'Our Products', link: '/catalog' },
  { text: 'About us', link: '/about' },
];

export const ACCOUNT_NAVIGATION_ITEMS = [
  { text: 'Personal info', link: '/profile' },
  { text: 'Cart', link: '/cart' },
];

export const CONTACT_DETAILS = [
  {
    label: 'Address',
    value: 'Victoria Place Shopping Centre, London',
    icon: (
      <FmdGoodIcon
        sx={{ display: 'flex', fontSize: 16, color: palette.grey[400], mr: 1 }}
      />
    ),
  },
  {
    label: 'Phone',
    value: '+ (44) 020-7903-9786',
    icon: (
      <CallIcon
        sx={{ display: 'flex', fontSize: 16, color: palette.grey[400], mr: 1 }}
      />
    ),
    link: 'tel:02079039786',
  },
  {
    label: 'Email',
    value: 'buyit.store@gmail.com',
    icon: (
      <MailIcon
        sx={{ display: 'flex', fontSize: 16, color: palette.grey[400], mr: 1 }}
      />
    ),
    link: 'mailto:buyit@gmail.com',
  },
];
