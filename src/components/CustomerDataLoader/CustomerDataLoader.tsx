import { Box, Skeleton } from '@mui/material';

const CustomerDataLoader: React.FC = () => {
  const customerDataFields = [
    'Personal data',
    'Password',
    'Shipping address',
    'Billing address',
  ];

  return (
    <Box>
      {customerDataFields.map((field) => (
        <Box key={field}>
          <Skeleton width="40%" height={40} />
          <Skeleton width="100%" height={100} />
        </Box>
      ))}
    </Box>
  );
};

export default CustomerDataLoader;
