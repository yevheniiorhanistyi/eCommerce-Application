import { FC } from 'react';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import styles from './EditiconButton.styles';
import { useModal } from '../../ModalProvider/ModalProvider';
import { IEditIconButtonProps } from '../../../types/types';

const EditIconButton: FC<IEditIconButtonProps> = ({
  customer,
  addSuccess,
}: IEditIconButtonProps) => {
  const modal = useModal();

  const handleClick = () => {
    modal.openModal('customer', false);
    modal.setContent('customer', {
      customer,
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
      sx={styles.editButton}
      variant="outlined"
      startIcon={<EditIcon sx={styles.editButtonIcon} />}
    />
  );
};

export default EditIconButton;
