import { FC } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import styles from './AddIconButton.styles';
import { useModal } from '../../ModalProvider/ModalProvider';
import { IAddIconButtonProps } from '../../../types/types';
import { TReturnClose } from '../../ModalProvider/type';

const AddIconButton: FC<IAddIconButtonProps> = ({
  userId,
  isBilling = false,
  versionId,
  addSuccess,
}: IAddIconButtonProps) => {
  const modal = useModal();

  const handleClick = () => {
    modal.openModal('address', false);
    modal.setContent(
      'address',
      {
        userId,
        isBilling,
        versionId,
      },
      (isSuccess: TReturnClose) => {
        if (isSuccess) {
          addSuccess();
        }
      },
    );
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
