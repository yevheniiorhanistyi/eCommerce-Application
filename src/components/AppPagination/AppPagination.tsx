import { Box, Pagination } from '@mui/material';
import { IAppPaginationProps } from '../../types/types';

export const AppPagination: React.FC<IAppPaginationProps> = ({
  searchParams,
  totalElements,
  currentPage,
  setCurrentPage,
  setSearchParams,
}: IAppPaginationProps) => {
  const elementsPerPage = 6;
  const totalPages = Math.ceil(totalElements / elementsPerPage);

  const handlePageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    const newOffset = ((page - 1) * 6) % totalElements;
    setCurrentPage(page - 1);
    setSearchParams({ ...searchParams, offset: newOffset });
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
