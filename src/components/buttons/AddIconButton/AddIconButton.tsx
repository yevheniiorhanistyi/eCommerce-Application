import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useModal } from '../../ModalProvider/ModalProvider';
import { IAddIconButtonProps } from '../../../types/types';
import { TReturnClose } from '../../ModalProvider/type';

import styles from './AddIconButton.styles';

const AddIconButton: React.FC<IAddIconButtonProps> = ({
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
