import React from 'react';
import { Skeleton } from '@mui/material';

const CustomerDataLoader: React.FC = () => {
  const customerDataFields = [
    'Personal data',
    'Password',
    'Shipping address',
    'Billing address',
  ];

  return (
    <>
      {customerDataFields.map((field) => (
        <>
          <Skeleton width="40%" height={40} />
          <Skeleton width="100%" height={100} />
        </>
      ))}
    </>
  );
};

export default CustomerDataLoader;
