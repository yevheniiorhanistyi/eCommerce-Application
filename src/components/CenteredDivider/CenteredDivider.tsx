import { Divider } from '@mui/material';
import { ICenteredDividerProps } from '../../types/types';

import styles from './CenteredDivider.styles';

const CenteredDivider: React.FC<ICenteredDividerProps> = ({
  caption,
}: ICenteredDividerProps) => (
  <Divider textAlign="center" sx={styles}>
    {caption}
  </Divider>
);

export default CenteredDivider;
