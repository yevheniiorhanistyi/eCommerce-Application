import { Divider } from '@mui/material';
import { FC } from 'react';

import styles from './CenteredDivider.styles';

interface CenteredDividerProps {
  caption: string;
}

const CenteredDivider: FC<CenteredDividerProps> = ({ caption }) => (
  <Divider textAlign="center" sx={styles}>
    {caption}
  </Divider>
);

export default CenteredDivider;
