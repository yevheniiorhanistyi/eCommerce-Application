import { useEffect, useState, FormEvent } from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ICommonProps } from '../../types/types';

import styles from './SearchInput.styles';

export const SearchInput: React.FC<ICommonProps> = ({
  searchParams,
  setSearchParams,
}: ICommonProps) => {
  const [debouncedInputValue, setDebouncedInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const handleSearchChange = (newValue: string) => {
    setDebouncedInputValue(newValue);
    setIsTyping(true);
  };

  useEffect(() => {
    let delayInputTimeoutId: NodeJS.Timeout;
    if (isTyping) {
      delayInputTimeoutId = setTimeout(() => {
        setSearchParams({ ...searchParams, term: debouncedInputValue });
        setIsTyping(false);
      }, 500);
    }
    return () => clearTimeout(delayInputTimeoutId);
  }, [debouncedInputValue, 500]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Paper component="form" sx={styles.paper} onSubmit={handleSubmit}>
      <InputBase
        sx={styles.inputBase}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
        value={debouncedInputValue}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
      <IconButton type="button" sx={styles.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;
