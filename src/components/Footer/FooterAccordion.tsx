import { Link } from 'react-router-dom';
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  COMPANY_NAVIGATION_ITEMS,
  ACCOUNT_NAVIGATION_ITEMS,
  CONTACT_DETAILS,
} from './constants/footerConstants';

import theme from '../../theme';
import styles from './Footer.styles';

const FooterAccordion: React.FC = () => (
  <>
    <Box sx={styles.companySection}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Typography variant="h6" noWrap sx={styles.companyLink}>
          BUYIT
        </Typography>
      </Link>
      <Typography color="white" sx={styles.companyDescription}>
        Welcome to BUYIT - your fashionable online marketplace for clothing
        shopping! Explore a wide range of stylish clothing and accessories. Shop
        the latest trends, discover unique items, and refresh your wardrobe with
        BUYIT. Online shopping made easier and more enjoyable with us.
      </Typography>
    </Box>
    <Accordion sx={{ backgroundColor: theme.palette.common.black }}>
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon sx={{ color: theme.palette.common.white }} />
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6" noWrap sx={styles.navigationLink}>
          COMPANY
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {COMPANY_NAVIGATION_ITEMS.map((item) => (
          <Link
            key={item.text}
            to={item.link}
            style={{ textDecoration: 'none' }}
          >
            <Typography variant="h6" noWrap sx={styles.navigationItem}>
              {item.text}
            </Typography>
          </Link>
        ))}
      </AccordionDetails>
    </Accordion>
    <Accordion sx={{ backgroundColor: theme.palette.common.black }}>
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon sx={{ color: theme.palette.common.white }} />
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6" noWrap sx={styles.navigationLink}>
          CUSTOM CARE
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {ACCOUNT_NAVIGATION_ITEMS.map((item) => (
          <Link
            key={item.text}
            to={item.link}
            style={{ textDecoration: 'none' }}
          >
            <Typography variant="h6" noWrap sx={styles.navigationItem}>
              {item.text}
            </Typography>
          </Link>
        ))}
      </AccordionDetails>
    </Accordion>
    <Accordion sx={{ backgroundColor: theme.palette.common.black }}>
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon sx={{ color: theme.palette.common.white }} />
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6" noWrap sx={styles.navigationLink}>
          Store information
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {CONTACT_DETAILS.map((info) => (
          <Link
            to={info.link || '#'}
            style={{ textDecoration: 'none' }}
            key={info.label}
          >
            <Box sx={styles.storeInfoItem}>
              {info.icon && info.icon}
              <Typography variant="h6" noWrap sx={styles.navigationItem}>
                {info.value}
              </Typography>
            </Box>
          </Link>
        ))}
      </AccordionDetails>
    </Accordion>
  </>
);

export default FooterAccordion;
