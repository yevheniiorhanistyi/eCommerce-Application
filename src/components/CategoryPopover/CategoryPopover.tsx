import { ReactNode, MouseEvent } from 'react';
import { Popover, Button, Box } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';

import styles from './CategoryPopover.styles';

interface CategoryPopoverProps {
  anchorEl: HTMLElement | null;
  setAnchorElem: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  children: ReactNode;
}

const CategoryPopover: React.FC<CategoryPopoverProps> = ({
  anchorEl,
  setAnchorElem,
  children,
}: CategoryPopoverProps) => {
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
