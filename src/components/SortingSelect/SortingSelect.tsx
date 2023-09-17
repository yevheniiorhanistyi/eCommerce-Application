import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { sortingOptions } from '../../constants/constants';
import { ICommonProps } from '../../types/types';

import styles from './SortingSelect.styles';

export const SortingSelect: React.FC<ICommonProps> = ({
  searchParams,
  setSearchParams,
}: ICommonProps) => {
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { value } = event.target;
    setSearchParams({ ...searchParams, sortValue: value });
  };

  return (
    <FormControl sx={styles.formControl}>
      <InputLabel id="simple-sorting-label">Sort By</InputLabel>
      <Select
        labelId="simple-sorting-label"
        value={searchParams.sortValue}
        onChange={handleSelectChange}
        label="Sort By"
      >
        {sortingOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SortingSelect;
