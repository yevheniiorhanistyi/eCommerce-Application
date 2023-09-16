import { Tooltip, IconButton, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

import styles from './NotificationsButton.styles';

const NotificationsButton = () => (
  <Tooltip title="Notifications">
    <Badge overlap="circular" badgeContent={0} color="error">
      <IconButton aria-label="notifications">
        <NotificationsIcon sx={styles.icon} />
      </IconButton>
    </Badge>
  </Tooltip>
);

export default NotificationsButton;
