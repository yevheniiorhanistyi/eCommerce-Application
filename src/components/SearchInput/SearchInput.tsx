import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ICommonProps } from '../../types/types';

import styles from './SearchInput.styles';

export const SearchInput: React.FC<ICommonProps> = ({
  searchParams,
  setSearchParams,
}: ICommonProps) => {
  const handleSearchChange = (newValue: string) => {
    setSearchParams({ ...searchParams, term: newValue });
  };

  return (
    <Paper component="form" sx={styles.paper}>
      <InputBase
        sx={styles.inputBase}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
        value={searchParams.term}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
      <IconButton type="button" sx={styles.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;
