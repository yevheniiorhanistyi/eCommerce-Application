import { Box, Pagination } from '@mui/material';
import { IAppPaginationProps } from '../../types/types';

export const AppPagination: React.FC<IAppPaginationProps> = ({
  totalPages,
  currentPage,
  handlePageChange,
}: IAppPaginationProps) => (
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

export default AppPagination;
