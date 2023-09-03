import { Box, List, ListItem, ListItemText } from '@mui/material';
import { FC } from 'react';

import styles from './CustomerAddress.styles';
import { ICustomerAddressProps } from '../../types/types';
import EditIconButton from '../buttons/EditIconButton/EditIconButton';
import DeleteIconButton from '../buttons/DeleteIconButton/DeleteIconButton';

const CustomerAddress: FC<ICustomerAddressProps> = ({
  addresses,
  defaultAddressId,
}: ICustomerAddressProps) => (
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
        <EditIconButton content={{}} />
        <Box sx={styles.separator} />
        <DeleteIconButton />
      </ListItem>
    ))}
  </List>
);

export default CustomerAddress;
