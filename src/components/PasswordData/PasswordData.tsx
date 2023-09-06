import { Box, List, ListItem, ListItemText } from '@mui/material';
import { FC } from 'react';
import EditIconButton from '../buttons/EditIconButton/EditIconButton';
import { useModal } from '../ModalProvider/ModalProvider';
import { IGetCustomerData } from '../../types/types';
import styles from './PasswordData.styles';

interface IPassworDataProps {
  customer: IGetCustomerData;
  addSuccess: () => void;
}

const PassworData: FC<IPassworDataProps> = ({
  customer,
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
              customer,
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
