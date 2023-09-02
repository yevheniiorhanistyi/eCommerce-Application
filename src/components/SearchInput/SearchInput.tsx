import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import styles from './SearchInput.styles';

type SearchInputProps = {
  value: string;
  onChangeValue: (value: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChangeValue,
}: SearchInputProps) => (
  <Paper component="form" sx={styles.paper}>
    <InputBase
      sx={styles.inputBase}
      placeholder="Search"
      inputProps={{ 'aria-label': 'search' }}
      value={value}
      onChange={(e) => onChangeValue(e.target.value)}
    />
    <IconButton type="button" sx={styles.iconButton} aria-label="search">
      <SearchIcon />
    </IconButton>
  </Paper>
);

export default SearchInput;
