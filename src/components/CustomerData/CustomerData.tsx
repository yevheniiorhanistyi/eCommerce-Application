import { Box, List, ListItem, ListItemText } from '@mui/material';
import { FC } from 'react';
import { ICustomerDataField, ICustomerDataProps, IGetCustomerData } from '../../types/types';
import EditIconButton from '../buttons/EditIconButton/EditIconButton';
import styles from './CustomerData.styles';

const CustomerData: FC<ICustomerDataProps> = ({
  fields,
  customer,
  addSuccess,
}: ICustomerDataProps) => (
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
      <EditIconButton userId={customer?.id as string} versionId={customer?.version as number} addSuccess={addSuccess} />
    </ListItem>
  </List>
);

export default CustomerData;
