import { Box, Pagination } from '@mui/material';
import React from 'react';

interface IAppPaginationProps {
  totalElements: number;
  currentPage: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const AppPagination: React.FC<IAppPaginationProps> = ({
  totalElements,
  currentPage,
  setCurrentPage,
  setOffset,
}: IAppPaginationProps) => {
  const elementsPerPage = 6;
  const totalPages = Math.ceil(totalElements / elementsPerPage);

  const handlePageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    const newOffset = ((page - 1) * 6) % totalElements;
    setCurrentPage(page - 1);
    setOffset(newOffset);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      margin="20px 0"
    >
      <Pagination
        page={currentPage + 1}
        onChange={handlePageChange}
        count={totalPages}
        color="primary"
        sx={{ '& button': { lineHeight: '1.25' } }}
      />
    </Box>
  );
};

export default AppPagination;
