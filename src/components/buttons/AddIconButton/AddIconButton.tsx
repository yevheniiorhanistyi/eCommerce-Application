import { FC } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import styles from './AddIconButton.styles';
import { useModal } from '../../ModalProvider/ModalProvider';
import { IEditIconButtonProps } from '../../../types/types';

const AddIconButton: FC<IEditIconButtonProps> = ({
  userId,
  isBilling,
  versionId,
  addSuccess,
}: IEditIconButtonProps) => {
  const modal = useModal();

  const handleClick = () => {
    modal.openModal('address', false);
    modal.setContent('address', {
      userId,
      isBilling,
      versionId,
      onClose: (isSuccess: boolean) => {
        if (isSuccess) {
          addSuccess();
        }
      },
    });
  };

  return (
    <Button
      onClick={handleClick}
      sx={styles.addButton}
      variant="outlined"
      startIcon={<AddIcon sx={styles.addButtonIcon} />}
    >
      Add
    </Button>
  );
};

export default AddIconButton;
