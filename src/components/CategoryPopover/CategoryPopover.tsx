import { ReactNode, MouseEvent } from 'react';
import { Popover, Button, Box } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';

import styles from './CategoryPopover.styles';

interface CategoryPopoverProps {
  anchorEl: HTMLElement | null;
  children: ReactNode;
  onClose: () => void;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const CategoryPopover: React.FC<CategoryPopoverProps> = ({
  anchorEl,
  onClose,
  handleClick,
  children,
}: CategoryPopoverProps) => {
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Button
        aria-describedby={id}
        variant="text"
        onClick={handleClick}
        sx={styles.buttonOpen}
      >
        <TuneIcon color="action" sx={styles.buttonIcon} />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
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
