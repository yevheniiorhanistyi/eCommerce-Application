import { MouseEvent } from 'react';
import { Popover, Button, Box } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import { ICategoryPopoverProps } from '../../types/types';

import styles from './CategoryPopover.styles';

export const CategoryPopover: React.FC<ICategoryPopoverProps> = ({
  anchorEl,
  setAnchorElem,
  children,
}: ICategoryPopoverProps) => {
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handlePopoverClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorElem(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorElem(null);
  };

  return (
    <>
      <Button
        aria-describedby={id}
        variant="text"
        onClick={handlePopoverClick}
        sx={styles.buttonOpen}
      >
        <TuneIcon color="action" sx={styles.buttonIcon} />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={styles.popover}
      >
        <Box sx={styles.innerBox}>{children}</Box>
      </Popover>
    </>
  );
};

export default CategoryPopover;
