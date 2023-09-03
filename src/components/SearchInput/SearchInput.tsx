import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import styles from './SearchInput.styles';

type SearchInputProps = {
  value: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  setSearchValue,
}: SearchInputProps) => {
  const handleSearchChange = (newValue: string) => {
    setSearchValue(newValue);
  };

  return (
    <Paper component="form" sx={styles.paper}>
      <InputBase
        sx={styles.inputBase}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
        value={value}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
      <IconButton type="button" sx={styles.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;
