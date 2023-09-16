import { Box, List, ListItem, ListItemText } from '@mui/material';

import styles from './CustomerAddress.styles';
import { ICustomerAddressProps } from '../../types/types';
import DeleteIconButton from '../buttons/DeleteIconButton/DeleteIconButton';
import EditIconButton from '../buttons/EditIconButton/EditIconButton';
import { useModal } from '../ModalProvider/ModalProvider';
import { TReturnClose } from '../ModalProvider/type';
import SetDefaultButton from '../buttons/SetDefaultButton/SetDefaultButton';

const CustomerAddress: React.FC<ICustomerAddressProps> = ({
  addresses,
  defaultAddressId,
  userId,
  versionId,
  editSuccess,
  deleteSuccess,
  setAsDefault,
  isBillingAddress,
}: ICustomerAddressProps) => {
  const modal = useModal();

  return (
    <List>
      {addresses.map((address, index) => (
        <ListItem key={address.id} sx={styles.addressItem}>
          <ListItemText
            primaryTypographyProps={{ style: styles.addressItemDataLabel }}
            primary={index + 1}
            secondary={defaultAddressId === address.id ? 'default' : ''}
            sx={styles.addressItemData}
          />
          <ListItemText
            primaryTypographyProps={{ style: styles.addressItemDataLabel }}
            primary="Country"
            secondary={!address.country ? '-' : address.country}
            sx={styles.addressItemData}
          />
          <ListItemText
            primaryTypographyProps={{ style: styles.addressItemDataLabel }}
            primary="City"
            secondary={!address.city ? '-' : address.city}
            sx={styles.addressItemData}
          />
          <ListItemText
            primaryTypographyProps={{ style: styles.addressItemDataLabel }}
            primary="Street"
            secondary={!address.streetName ? '-' : address.streetName}
            sx={styles.addressItemData}
          />
          <ListItemText
            primaryTypographyProps={{ style: styles.addressItemDataLabel }}
            primary="Postal code"
            secondary={!address.postalCode ? '-' : address.postalCode}
            sx={styles.addressItemData}
          />
          <EditIconButton
            callback={() => {
              modal.openModal('editAddress', false);
              modal.setContent(
                'editAddress',
                {
                  address,
                  userId,
                  versionId,
                },
                (isSuccess: TReturnClose): void => {
                  if (isSuccess) {
                    editSuccess();
                  }
                },
              );
            }}
          />
          <Box sx={styles.separator} />
          <DeleteIconButton
            userId={userId}
            versionId={versionId}
            addressId={address.id as string}
            deleteSuccess={deleteSuccess}
          />
          <Box sx={styles.separator} />

          <SetDefaultButton
            callback={() => {
              setAsDefault(address.id as string, isBillingAddress);
            }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default CustomerAddress;
