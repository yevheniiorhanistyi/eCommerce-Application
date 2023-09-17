import { Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import styles from './DeleteIconButton.styles';
import { IDeleteIconButtonProps } from '../../../types/types';
import deleteAddress from '../../../services/profile/deleteAddress';

const DeleteIconButton: React.FC<IDeleteIconButtonProps> = ({
  userId,
  versionId,
  addressId,
  deleteSuccess,
}: IDeleteIconButtonProps) => {
  const handleClick = async () => {
    await deleteAddress(addressId, userId, versionId);
    deleteSuccess();
  };

  return (
    <Button
      sx={styles.deleteButton}
      startIcon={<DeleteOutlineIcon sx={styles.deleteButtonIcon} />}
      variant="outlined"
      onClick={handleClick}
    />
  );
};

export default DeleteIconButton;
