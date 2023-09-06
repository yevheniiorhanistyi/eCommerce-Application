import { Box, List, ListItem, ListItemText } from '@mui/material';
import { FC } from 'react';
import EditIconButton from '../buttons/EditIconButton/EditIconButton';
import styles from './PasswordData.styles';
import { useModal } from '../ModalProvider/ModalProvider';

interface IPassworDataProps {
  addSuccess: () => void;
}

const PassworData: FC<IPassworDataProps> = ({
  addSuccess,
}: IPassworDataProps) => {
  const modal = useModal();
  return (
    <List>
      <ListItem sx={styles.listItem}>
        <ListItemText primary="Curent Password" secondary="*************" />
        <Box sx={styles.separator} />
        <EditIconButton
          callback={() => {
            modal.openModal('password', false);
            modal.setContent('password', {
              onClose: (isSuccess: boolean) => {
                if (isSuccess) {
                  addSuccess();
                }
              },
            });
          }}
        />
      </ListItem>
    </List>
  );
};

export default PassworData;
