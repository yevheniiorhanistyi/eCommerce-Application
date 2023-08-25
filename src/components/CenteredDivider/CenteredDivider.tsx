import { Divider } from '@mui/material';
import { FC } from 'react';
import { ICenteredDividerProps } from '../../types/types';

import styles from './CenteredDivider.styles';

const CenteredDivider: FC<ICenteredDividerProps> = ({ caption }) => (
  <Divider textAlign="center" sx={styles}>
    {caption}
  </Divider>
);

export default CenteredDivider;
