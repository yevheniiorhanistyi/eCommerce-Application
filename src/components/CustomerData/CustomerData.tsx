import { List, ListItem, ListItemText } from '@mui/material';
import { FC } from 'react';
import { ICustomerDataField, ICustomerDataProps } from '../../types/types';
import EditIconButton from '../buttons/EditIconButton/EditIconButton';
import styles from './CustomerData.styles';

const CustomerData: FC<ICustomerDataProps> = ({
  logoIcon,
  fields,
  customer,
}: ICustomerDataProps) => (
  <List>
    <ListItem sx={styles.listItem}>
      {fields.map((field: ICustomerDataField) => (
        <ListItemText key={field.title} primary={field.title} secondary={field.description} />
      ))}
      <EditIconButton content={customer} />
    </ListItem>
  </List>
);

export default CustomerData;
