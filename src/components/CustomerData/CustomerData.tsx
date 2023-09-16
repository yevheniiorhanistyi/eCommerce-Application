import { Box, List, ListItem, ListItemText } from '@mui/material';
import { ICustomerDataField, ICustomerDataProps } from '../../types/types';
import EditIconButton from '../buttons/EditIconButton/EditIconButton';
import styles from './CustomerData.styles';
import { useModal } from '../ModalProvider/ModalProvider';
import { TReturnClose } from '../ModalProvider/type';

const CustomerData: React.FC<ICustomerDataProps> = ({
  fields,
  customer,
  addSuccess,
}: ICustomerDataProps) => {
  const modal = useModal();
  return (
    <List>
      <ListItem sx={styles.listItem}>
        {fields.map((field: ICustomerDataField) => (
          <ListItemText
            key={field.title}
            primary={field.title}
            secondary={field.description}
          />
        ))}
        <Box sx={styles.separator} />
        <EditIconButton
          callback={() => {
            modal.openModal('customer', false);
            modal.setContent(
              'customer',
              {
                customer,
              },
              (isSuccess: TReturnClose) => {
                if (isSuccess) {
                  addSuccess();
                }
              },
            );
          }}
        />
      </ListItem>
    </List>
  );
};

export default CustomerData;
