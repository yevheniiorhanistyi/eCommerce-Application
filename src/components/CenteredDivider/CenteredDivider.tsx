import { Divider } from '@mui/material';
import { ICenteredDividerProps } from '../../types/types';

const CenteredDivider: React.FC<ICenteredDividerProps> = ({
  caption,
}: ICenteredDividerProps) => (
  <Divider textAlign="center" sx={{ pt: 2 }}>
    {caption}
  </Divider>
);

export default CenteredDivider;
