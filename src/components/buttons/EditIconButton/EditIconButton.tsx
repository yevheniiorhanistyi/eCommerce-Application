import { FC } from 'react';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import styles from './EditiconButton.styles';
import { useModal } from '../../ModalProvider/ModalProvider';
import { IEditIconButtonProps } from '../../../types/types';

const EditIconButton: FC<IEditIconButtonProps> = ({
  userId,
}: IEditIconButtonProps) => {
  const modal = useModal();

  const handleClick = () => {
    modal.openModal('customer', false);
    modal.setContent('customer', {
      userId,
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
